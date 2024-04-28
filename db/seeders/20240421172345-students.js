'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Students',
      [
        {
          name: 'Мансурова Анна',
          email: 'mansurova@example.com',
          password: await bcrypt.hash('123', 10),
          facultyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Иванова Мария',
          email: 'ivanova@example.com',
          password: await bcrypt.hash('123', 10),
          facultyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Долгих Милана',
          email: 'dolgih@example.com',
          password: await bcrypt.hash('123', 10),
          facultyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Алтаева Анна',
          email: 'altaeva@example.com',
          password: await bcrypt.hash('123', 10),
          facultyId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Власова Катерина',
          email: 'vlasova@example.com',
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
    await queryInterface.bulkDelete('Students', null, {});
  },
};
