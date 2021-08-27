const { findMockData } = require("../../mock-data/mock-data");

const signIn = (req, res) => {
	console.log(req.method, req.url);
	const { email, password } = req.body;
	const findedUser = findMockData(email);

	console.log(findedUser);

	//해당 유저 존재하지 않을때
	if (findedUser === undefined) {
		return res.status(401).json({
			message: "-임시- 해당 유저 존재하지 않음",
		});
	}

	//비밀번호 일치하지 않을때
	if (findedUser.password !== password) {
		return res.status(401).json({
			message: "-임시- 비밀번호가 일치하지 않음",
		});
	}

	//로그인 성공
	return res.json({
		user: {
			email: findedUser.email,
			nickname: findedUser.nickname,
		},
		message: "-임시- 로그인 성공",
	});
};

module.exports = signIn;
