'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faculty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Student, { foreignKey: 'facultyId' });
      this.hasMany(models.Teacher, { foreignKey: 'facultyId' });
    }
  }
  Faculty.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Faculty',
    }
  );
  return Faculty;
};
