'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Teachers',
      [
        {
          name: 'Высицкий Анатолий Федорович',
          email: 'Vafmain@mail.ru',
          password: await bcrypt.hash('123', 10),
          facultyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Муравьев Евгений Александрович',
          email: 'muravyev.evgeny@yandex.ru',
          password: await bcrypt.hash('123', 10),
          facultyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teachers', null, {});
  },
};
