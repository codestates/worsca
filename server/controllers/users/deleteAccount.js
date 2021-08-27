const db = require("../../models");

const sendBadRequest = (res) => {
	res.status(400).json({
		message: "-임시- 잘못된 요청",
	});
};

const deleteAccount = async (req, res) => {
	try {
		//유효성 검사
		const requirementKey = ["email", "password"];
		const bodyKeys = Object.keys(req.body);
		if (bodyKeys.length !== requirementKey.length) {
			return sendBadRequest(res);
		}

		for (let i = 0; i < requirementKey.length; i++) {
			if (req.body[requirementKey[i]] === undefined) {
				return sendBadRequest(res);
			}
		}

		const { email, password } = req.body;
		const user = await db.User.findOne({ where: { email } });

		if (user === undefined || user === null) {
			return res.status(401).json({
				message: "-임시- 해당 유저 존재하지 않음",
			});
		}

		if (user.password !== password) {
			return res.status(401).json({
				message: "-임시- 비밀번호가 일치하지 않음",
			});
		}

		await user.destroy();
		res.status(201).json({
			message: "-임시- 삭제 완료",
		});
	} catch (err) {
		res.status(500).json({
			message: "error in server",
		});
	}
};

module.exports = deleteAccount;
