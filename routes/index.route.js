const router = require('express').Router();

// роуты
const mainRoute = require('./views/main.route');
const authRoute = require('./views/auth.route');
const searchRoute = require('./views/search.route');
const profileRoute = require('./views/profile.route');

// api
const authApi = require('./api/api.auth.route');
const profileApi = require('./api/api.profile.route');

router.use('/', mainRoute);
router.use('/auth', authRoute);
router.use('/search', searchRoute);
router.use('/profile', profileRoute);

router.use('/api/auth', authApi);
router.use('/api/profile', profileApi);

module.exports = router;
