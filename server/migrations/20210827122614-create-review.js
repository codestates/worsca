"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Reviews", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_email: {
				type: Sequelize.STRING,
				references: {
					model: "Users",
					key: "email",
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
			contents: {
				type: Sequelize.STRING,
			},
			rating: {
				type: Sequelize.INTEGER,
			},
			decibel: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Reviews");
	},
};
