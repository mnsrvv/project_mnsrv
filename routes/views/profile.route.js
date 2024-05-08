const router = require('express').Router();

// компоненты
const Profile = require('../../components/pages/Profile');

// модели
const { File, Subject, SubjectTeacher } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const files = await File.findAll({
      where: { teacherId: res.locals.user.id },
    });

    const subjects = await SubjectTeacher.findAll({
      where: { teacherId: res.locals.user.id },
      include: { model: Subject },
    });

    const html = res.renderComponent(Profile, { files, subjects });

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

module.exports = router;
