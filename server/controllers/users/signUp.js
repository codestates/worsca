const db = require("../../models");

const sendBadRequest = (res) => {
	res.status(400).json({
		message: "-임시- 잘못된 요청",
	});
};

const signUp = async (req, res) => {
	try {
		//유효성 검사
		const requirementKey = ["email", "password", "nickname"];
		const bodyKeys = Object.keys(req.body);
		if (bodyKeys.length !== requirementKey.length) {
			return sendBadRequest(res);
		}

		for (let i = 0; i < requirementKey.length; i++) {
			if (req.body[requirementKey[i]] === undefined) {
				return sendBadRequest(res);
			}
		}

		//db에 추가
		const { email, password, nickname } = req.body;
		const newUser = await db.User.create({ email, password, nickname });

		res.status(201).json({
			user: {
				email: newUser.email,
				nickname: newUser.nickname,
			},
			message: "-임시- 회원가입 성공",
		});
	} catch (err) {
		//이메일 중복
		if (err.errors[0]) {
			const { type } = err.errors[0];
			if (type === "unique violation") {
				return res.status(409).json({
					message: "-임시- 이메일 중복",
				});
			}
		}
		res.status(500).json({
			message: "error in server",
		});
	}

	// DB 이메일 중복 검사
	// if (containMockData(email)) {
	// 	logData();
	// 	return res.status(409).json({
	// 		message: "-임시- 이메일 중복",
	// 	});
	// }

	// 회원가입 성공
	// addMockData(email, password, nickname);
	// res.status(201).json({
	// 	message: "-임시- 회원가입 성공",
	// });
	// logData();
};

module.exports = signUp;
