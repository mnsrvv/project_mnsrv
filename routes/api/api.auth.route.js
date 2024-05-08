const router = require('express').Router();
const bcrypt = require('bcrypt');
const generateTokens = require('../../utils/generateTokens');
const jwtConfig = require('../../config/jwtConfig');

// модели
const { Student, Teacher, Admin } = require('../../db/models');

// // компоненты
// const UserPage = require('../../components/pages/User');

// // модели
// const { User } = require('../../db/models');

// // страница пользователя
// router.get('/', async (req, res) => {
//   try {
//     const user = res.renderComponent(UserPage, { user: res.locals.user });

//     res.send(user);
//   } catch (error) {
//     res.json({ message: 'error', error });
//   }
// });

// // изменение пользователя
// router.put('/change', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const user = await User.findOne({ where: { id: res.locals.user.id } });

//     if (!name.trim() || !email.trim()) {
//       res.json({ message: 'trim' });
//       return;
//     }

//     let pass;
//     if (password) {
//       if (!password.trim()) {
//         res.json({ message: 'trim' });
//         return;
//       }

//       pass = await bcrypt.hash(password, 10);
//     } else {
//       pass = user.password;
//     }

//     if (user) {
//       await user.update(
//         {
//           name,
//           email,
//           pass,
//         },
//         {
//           where: { id: res.locals.user.id },
//         }
//       );

//       const { accessToken, refreshToken } = generateTokens({
//         user: { id: user.id, email: user.email, name: user.name },
//       });

//       res
//         .cookie(jwtConfig.refresh.type, refreshToken, {
//           maxAge: jwtConfig.refresh.expiresIn,
//           httpOnly: true,
//         })
//         .cookie(jwtConfig.access.type, accessToken, {
//           maxAge: jwtConfig.access.expiresIn,
//           httpOnly: true,
//         });

//       res.json({ message: 'success' });
//     } else {
//       res.json({ message: 'error' });
//     }
//   } catch (error) {
//     res.json({ message: 'error', error });
//   }
// });

// регистрация
router.post('/sign-up', async (req, res) => {
  try {
    const { name, email, password, rPassword, faculty, group } = req.body;

    if (password !== rPassword) {
      res.json({ message: 'password' });
      return;
    }

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !rPassword.trim() ||
      !faculty ||
      !group
    ) {
      res.json({ message: 'trim' });
      return;
    }

    const user = await Student.findOne({ where: { email } });

    if (user) {
      res.json({ message: 'error' });
    } else {
      const newUser = await Student.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        facultyId: +faculty,
        group: +group,
      });

      res.json({ message: 'success' });
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

// авторизация
router.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user =
      (await Student.findOne({ where: { email } })) ||
      (await Teacher.findOne({ where: { email } })) ||
      (await Admin.findOne({ where: { email } }));

    const isRight = await bcrypt.compare(password, user.password);

    if (isRight) {
      res.locals.user = user;

      const { accessToken, refreshToken } = generateTokens({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      });

      res
        .cookie(jwtConfig.refresh.type, refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .cookie(jwtConfig.access.type, accessToken, {
          maxAge: jwtConfig.access.expiresIn,
          httpOnly: true,
        });

      res.json({ message: 'success' });
    } else {
      res.json({ message: 'Неверно введены данные' });
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

// выход
router.get('/logout', async (req, res) => {
  res.clearCookie(jwtConfig.access.type).clearCookie(jwtConfig.refresh.type);
  res.redirect('/');
});

module.exports = router;
