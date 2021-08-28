const db = require("../../models");
const { validateBody } = require("../../util/validation");
const { sendBadRequest, sendNotFoundUser, sendNotMatchPassword } = require("../../util/response");

const signIn = async (req, res, next) => {
	try {
		if( !validateBody(req.body, "email", "password") ){
			return sendBadRequest(res);
		};

		const { email, password } = req.body;
		const findedUser = await db.User.findOne({ where: { email } });
		//해당 유저 존재하지 않을때
		if (findedUser === undefined || findedUser === null) {
			return sendNotFoundUser(res);
		}

		//비밀번호 일치하지 않을때
		if (findedUser.password !== password) {
			return sendNotMatchPassword(res);
		}

		//로그인 성공
		return res.json({
			user: {
				email: findedUser.email,
				nickname: findedUser.nickname,
			},
			message: "로그인에 성공하였습니다.",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = signIn;
