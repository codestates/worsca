'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Store.belongsTo(models.User, {
        foreignKey: 'owner_id',
        targetKey: 'id'
      });
    }
  };
  Store.init({
    store_id: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER,
    number: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    homepage: DataTypes.STRING,
    open: DataTypes.DATE,
    close: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Store',
    timestamps: false
  });
  return Store;
};