const db = require("../../models");

const signIn = async (req, res) => {
	try {
		const { email, password } = req.body;
		const findedUser = await db.User.findOne({ where: { email } });
		//해당 유저 존재하지 않을때
		if (findedUser === undefined || findedUser === null) {
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
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "error in server",
		});
	}
};

module.exports = signIn;
