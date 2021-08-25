const sendBadRequest = (res) => {
	res.status(400).json({
		message: "-임시- 잘못된 요청",
	});
};

const signUp = (req, res) => {
	const requirementKey = ["email", "password", "nickname", "mobile"];
	const bodyKeys = Object.keys(req.body);
	if (bodyKeys.length !== requirementKey.length) {
		return sendBadRequest(res);
	}

	for (let i = 0; i < requirementKey.length; i++) {
		if (req.body[requirementKey[i]] === undefined) {
			return sendBadRequest(res);
		}
	}

	// DB 이메일 중복 검사
	if (req.body.email === "test@test.t") {
		return res.status(409).json({
			message: "-임시- 이메일 중복",
		});
	}

	// 회원가입 성공
	res.status(201).json({
		message: "-임시- 회원가입 성공",
	});
};

module.exports = signUp;
