'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'SubjectTeachers',
      [
        {
          subjectId: 1,
          teacherId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subjectId: 2,
          teacherId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SubjectTeachers', null, {});
  },
};
