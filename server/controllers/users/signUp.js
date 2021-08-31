const Users = require("../../dbconnector/Users");
const { validateBody } = require("../../util/validation");
const { sendBadRequest } = require("../../util/response");

const signUp = async (req, res, next) => {
	try {
		if (!validateBody(req.body, "email", "password", "nickname")) {
			return sendBadRequest(res);
		}

		//db에 추가
		const { email, password, nickname } = req.body;
		const newUser = await Users.add(email, password, nickname);

		res.status(201).json({
			user: {
				email: newUser.email,
				nickname: newUser.nickname,
			},
			message: "회원가입에 성공했습니다.",
		});
	} catch (err) {
		//이메일 중복
		if (err.errors[0]) {
			const { type } = err.errors[0];
			if (type === "unique violation") {
				return res.status(409).json({
					message: "동일한 이메일을 가지고있는 유저가 있습니다.",
				});
			}
		}

		//500 서버 에러
		next(err);
	}
};

module.exports = signUp;
