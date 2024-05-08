'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Files',
      [
        {
          name: 'Методическое задание 1',
          description: 'test',
          path: '/files/test1.txt',
          teacherId: 1,
          subjectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Методическое задание 2',
          description: 'test',
          path: '/files/test2.txt',
          teacherId: 2,
          subjectId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Files', null, {});
  },
};
