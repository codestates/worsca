"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Stores", {
			store_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			owner_id: {
				type: Sequelize.INTEGER,
				references: {
					model: "Users",
					key: "id",
				},
				onUpdate: "cascade",
				onDelete: "set null",
			},
			total_rating: {
				type: Sequelize.INTEGER,
			},
			total_decibel: {
				type: Sequelize.INTEGER,
			},
			total_reviewers: {
				type: Sequelize.INTEGER,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Stores");
	},
};
