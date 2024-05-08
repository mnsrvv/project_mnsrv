const router = require('express').Router();
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
      res.json({ message: 'success' });
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

module.exports = router;
