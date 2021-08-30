"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Bookmark extends Model {
		static associate(models) {}
	}
	Bookmark.init(
		{
			user_id: {
				type: DataTypes.INTEGER,
				references: {
					model: "Users",
					key: "id",
				},
				onUpdate: "cascade",
				onDelete: "cascade",
			},
			store_id: {
				type: DataTypes.INTEGER,
				references: {
					model: "Stores",
					key: "store_id",
				},
				onUpdate: "cascade",
				onDelete: "cascade",
			},
		},
		{
			sequelize,
			modelName: "Bookmark",
			timestamps: false,
		}
	);
	return Bookmark;
};
