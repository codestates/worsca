const jwt = require("jsonwebtoken");

//temp import
const dotenv = require("dotenv");
dotenv.config();

const createJWT = (payload) => {
	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5m" });
	return token;
};

const verifyJWT = (token) => {
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		return decoded;
	} catch (err) {
		return err;
	}
};

const verifyAuth = (auth) => {
	if (auth === undefined) {
		return null;
	}
	const token = auth.split(" ")[1];
	return verifyJWT(token);
};

module.exports = {
	createJWT,
	verifyJWT,
	verifyAuth,
};
