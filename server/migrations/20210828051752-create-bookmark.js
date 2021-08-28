"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Bookmarks", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "Users",
					key: "id",
				},
				onUpdate: "cascade",
				onDelete: "cascade",
			},
			store_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "Stores",
					key: "store_id",
				},
				onUpdate: "cascade",
				onDelete: "cascade",
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Bookmarks");
	},
};
