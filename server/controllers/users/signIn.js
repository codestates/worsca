const Users = require("../../dbconnector/Users");
const { validateBody } = require("../../util/validation");
const {
	sendBadRequest,
	sendNotFoundUser,
	sendNotMatchPassword,
} = require("../../util/response");

const signIn = async (req, res, next) => {
	try {
		if (!validateBody(req.body, "email", "password")) {
			return sendBadRequest(res);
		}

		const { email, password } = req.body;
		const [user, result] = await Users.matchPassword(email, password);

		//파라미터 잘못 줌
		if (result === -2) {
			throw new Error();
		}

		//해당 유저 존재하지 않을때
		if (result === 0) {
			return sendNotFoundUser(res);
		}

		//비밀번호 일치하지 않을때
		if (result === -1) {
			return sendNotMatchPassword(res);
		}

		//로그인 성공 result === 1
		return res.json({
			user: {
				email: user.email,
				nickname: user.nickname,
			},
			message: "로그인에 성공하였습니다.",
		});
	} catch (err) {
		console.log("???");
		console.dir(err);
		next(err);
	}
};

module.exports = signIn;
