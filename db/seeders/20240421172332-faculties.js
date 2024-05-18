'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Faculties',
      [
        {
          name: 'Факультет цифровых промышленных технологий',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Факультет морского приборостроения',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Факультет кораблестроения и океанотехники',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Факультет корабельной энергетики и автоматики',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Инженерно-экономический факультет',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Факультет естественнонаучного и гуманитарного образования',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Faculties', null, {});
  },
};
