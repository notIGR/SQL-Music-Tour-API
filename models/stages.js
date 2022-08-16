'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stages.init({
    event_id: DataTypes.INTEGER,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Stages',
  });
  return Stages;
};