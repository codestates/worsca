//temp import
const {
	addMockData,
	containMockData,
	logData,
} = require("../../mock-data/mock-data");

const sendBadRequest = (res) => {
	res.status(400).json({
		message: "-임시- 잘못된 요청",
	});
};

const signUp = (req, res) => {
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

	const { email, password, nickname } = req.body;
	// DB 이메일 중복 검사
	if (containMockData(email)) {
		logData();
		return res.status(409).json({
			message: "-임시- 이메일 중복",
		});
	}

	// 회원가입 성공
	addMockData(email, password, nickname);
	res.status(201).json({
		message: "-임시- 회원가입 성공",
	});
	logData();
};

module.exports = signUp;
