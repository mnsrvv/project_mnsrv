'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Faculty, { foreignKey: 'facultyId' });
      this.hasMany(models.File, { foreignKey: 'teacherId' });
      this.hasMany(models.SubjectTeacher, { foreignKey: 'teacherId' });
    }
  }
  Teacher.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      facultyId: DataTypes.INTEGER,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Teacher',
    }
  );
  return Teacher;
};
