'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
    }
  }
  File.init(
    {
      path: DataTypes.STRING,
      teacherId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'File',
    }
  );
  return File;
};
