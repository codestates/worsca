const dotenv = require("dotenv");
dotenv.config();

module.exports = {
	development: {
		username: process.env.DB_ID,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: "mysql",
		logging: false,
	},
	test: {
		username: process.env.DB_ID,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: "mysql",
		logging: false,
	},
	production: {
		username: process.env.DB_ID,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: "mysql",
		logging: false,
	},
};
