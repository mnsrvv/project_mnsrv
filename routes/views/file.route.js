const router = require('express').Router();

// компоненты
const FileView = require('../../components/pages/FileView');
const FileChange = require('../../components/pages/FileChange');

// модели
const { File, Subject, SubjectTeacher, Teacher } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const file = await File.findOne({
      where: { id },
      include: { model: Teacher },
    });

    const html = res.renderComponent(FileView, { file });

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

router.get('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const file = await File.findOne({
      where: { id, teacherId: res.locals.user.id },
    });

    const subjects = await SubjectTeacher.findAll({
      where: { teacherId: res.locals.user.id },
      include: { model: Subject },
    });

    const html = res.renderComponent(FileChange, { file, subjects });

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

module.exports = router;
