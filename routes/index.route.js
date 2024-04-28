const router = require('express').Router();

// роуты
const mainRoute = require('./views/main.route');

router.use('/', mainRoute);

module.exports = router;
