const router = require('express').Router();
const { Op, where } = require('sequelize');

// компоненты
const Authors = require('../../components/pages/Authors');
const Files = require('../../components/pages/Files');

// модели
const { Faculty, Teacher, File, Subject } = require('../../db/models');

router.get('/results', async (req, res) => {
  try {
    const { author, name, words, subject } = req.query;

    let conditions = [];
    if (name) {
      conditions.push({ name: { [Op.iLike]: `%${name}%` } });
    }
    if (words) {
      conditions.push({ description: { [Op.iLike]: `%${words}%` } });
    }

    let whereClause = {};
    if (conditions.length > 1) {
      whereClause = { [Op.or]: conditions };
    } else if (conditions.length === 1) {
      whereClause = conditions[0];
    }

    const files = await File.findAll({
      include: [
        {
          model: Teacher,
          where: author ? { name: { [Op.iLike]: `%${author}%` } } : {},
        },
        {
          model: Subject,
          where: subject ? { name: { [Op.iLike]: `%${subject}%` } } : {},
        },
      ],
      where: whereClause,
    });

    const html = res.renderComponent(Files, { files });

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

router.get('/authors', async (req, res) => {
  try {
    const faculties = await Faculty.findAll({
      include: {
        model: Teacher,
      },
    });
    const html = res.renderComponent(Authors, { faculties });

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

router.get('/authors/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const files = await File.findAll({
      where: { teacherId: id },
      include: {
        model: Teacher,
      },
    });
    const html = res.renderComponent(Files, { files });

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

router.get('/files', async (req, res) => {
  try {
    const files = await File.findAll({
      include: {
        model: Teacher,
      },
    });
    const html = res.renderComponent(Files, { files });

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

router.get('/sortedFiles', async (req, res) => {
  try {
    const { sort, sortOrder } = req.query;

    // Определение порядка сортировки
    let order;
    switch (sort) {
      case '1':
        order = ['name', sortOrder === 'ascending' ? 'ASC' : 'DESC'];
        break;
      case '2':
        order = ['Teacher', 'name', sortOrder === 'ascending' ? 'ASC' : 'DESC'];
        break;
      case '3':
        order = ['createdAt', sortOrder === 'ascending' ? 'ASC' : 'DESC'];
        break;
      default:
        order = [];
    }

    const files = await File.findAll({
      include: {
        model: Teacher,
      },
      order: [order],
    });

    const html = res.renderComponent(Files, { files });

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

module.exports = router;
