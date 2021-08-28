"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Store extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Store.belongsTo(models.User, {
				foreignKey: "owner_id",
				targetKey: "id",
			});

			models.Store.hasMany(models.Review, {
				foreignKey: "store_id",
				sourceKey: "store_id",
			});

			models.Store.belongsToMany(models.User, {
				through: models.Bookmark,
				foreignKey: "store_id",
				otherKey: "id",
			});
		}
	}
	Store.init(
		{
			store_id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			owner_id: DataTypes.INTEGER,
			total_rating: DataTypes.INTEGER,
			total_decibel: DataTypes.INTEGER,
			total_reviewers: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Store",
			timestamps: false,
		}
	);
	return Store;
};
