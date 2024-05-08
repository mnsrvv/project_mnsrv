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
      this.belongsTo(models.Subject, { foreignKey: 'subjectId' });
    }
  }
  File.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      path: DataTypes.STRING,
      teacherId: DataTypes.INTEGER,
      subjectId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'File',
    }
  );
  return File;
};
