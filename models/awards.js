'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Awards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Awards.init({
    awards_name: DataTypes.STRING,
    awards_type: DataTypes.STRING,
    awards_price: DataTypes.INTEGER,
    awards_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Awards',
  });
  return Awards;
};