const Users = require("../../dbconnector/Users");
const {
	sendNotFoundUser,
	sendUnauthorizedToken,
} = require("../../util/response");
const { verifyAuth } = require("../../auth/jwtToken");

const getMypageInfo = async (req, res, next) => {
	try {
		// Authorization 검사
		const userInToken = verifyAuth(req.headers.authorization);
		if (userInToken instanceof Error || userInToken === null) {
			return sendUnauthorizedToken(res, userInToken);
		}

		//user 찾기
		const user = await Users.find(userInToken.email, {
			stores: true,
			reviews: true,
		});

		//해당 유저 존재하지않음
		if (user === undefined || user === null) {
			return sendNotFoundUser(res);
		}

		//200 OK
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
};

module.exports = getMypageInfo;
