const router = require('express').Router();

// компоненты
const Main = require('../../components/pages/Main');

// главная страница
router.get('/', async (req, res) => {
  try {
    const html = res.renderComponent(Main);

    res.send(html);
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

module.exports = router;
