'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'id'
      });
    }
  };
  Review.init({
    user_id: DataTypes.INTEGER,
    store_id: DataTypes.INTEGER,
    contents: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    decibel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};