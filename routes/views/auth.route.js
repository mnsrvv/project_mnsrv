const router = require('express').Router();

// компоненты
const Authorization = require('../../components/pages/Authorization');
const Registration = require('../../components/pages/Registration');

// модели
const { Faculty } = require('../../db/models');

// логин
router.get('/sign-in', async (req, res) => {
  try {
    const html = res.renderComponent(Authorization);

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

// регистрация
router.get('/sign-up', async (req, res) => {
  try {
    const faculties = await Faculty.findAll();
    const html = res.renderComponent(Registration, { faculties });

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

module.exports = router;
