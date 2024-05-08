// импорты
require('@babel/register');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const indexRoute = require('./routes/index.route');

// мидлвары
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const ssr = require('./middlewares/ssr');
const jwtVerify = require('./middlewares/jwtVerify');

// роуты
app.use(ssr);
app.use(jwtVerify);
app.use('/', indexRoute);

// листенер
app.listen(3000, () => {
  console.log('All good!');
});
