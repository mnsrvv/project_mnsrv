'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubjectTeacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Subject, { foreignKey: 'subjectId' });
      this.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
    }
  }
  SubjectTeacher.init(
    {
      subjectId: DataTypes.INTEGER,
      teacherId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'SubjectTeacher',
    }
  );
  return SubjectTeacher;
};
