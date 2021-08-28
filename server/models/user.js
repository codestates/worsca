"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.User.hasMany(models.Review, {
				foreignKey: "user_email",
				sourceKey: "email",
			});

			models.User.hasMany(models.Store, {
				foreignKey: "owner_id",
				sourceKey: "id",
			});
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				unique: true,
			},
			password: DataTypes.STRING,
			nickname: DataTypes.STRING,
			is_owner: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "User",
			timestamps: false,
		}
	);
	return User;
};
