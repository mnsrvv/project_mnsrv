const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');

// модели
const { File } = require('../../db/models');

// мультер
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/files');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const path = `/files/${req.file.originalname}`;
    const { name, description, subjectId } = req.body;

    const newFile = await File.create({
      name,
      description,
      path,
      teacherId: res.locals.user.id,
      subjectId,
    });

    if (newFile) {
      res.redirect('/profile');
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

router.post('/update/:id', upload.single('file'), async (req, res) => {
  try {
    const { name, description, subjectId } = req.body;
    const { id } = req.params;

    let updateData = {
      name,
      description,
      subjectId,
    };

    if (req.file) {
      const file = await File.findOne({
        where: { id, teacherId: res.locals.user.id },
      });

      if (file) {
        const filePath = path.join(__dirname, '../../public', file.path);
        await fs.unlink(filePath);
      }

      const newPath = `/files/${req.file.originalname}`;
      updateData.path = newPath;
    }

    const [updatedRows] = await File.update(updateData, {
      where: { id, teacherId: res.locals.user.id },
    });

    if (updatedRows > 0) {
      res.redirect(`/file/${id}`);
    } else {
      res.status(404).json({ message: 'File not found or user unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating file', error });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findOne({
      where: { id, teacherId: res.locals.user.id },
    });

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    const filePath = path.join(__dirname, '../../public', file.path);

    await fs.unlink(filePath);

    await file.destroy();

    res.json({ message: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting file', error });
  }
});

module.exports = router;
