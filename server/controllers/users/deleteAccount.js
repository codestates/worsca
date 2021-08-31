const Users = require("../../dbconnector/Users");
const { validateBody } = require("../../util/validation");
const {
	sendBadRequest,
	sendNotFoundUser,
	sendNotMatchPassword,
} = require("../../util/response");

const deleteAccount = async (req, res, next) => {
	try {
		if (!validateBody(req.body, "password")) {
			return sendBadRequest(res);
		}
		const { email } = req.params;
		const { password } = req.body;
		const [user, result] = await Users.remove(email, password);

		//해당 유저 없음
		if (result === 0) {
			return sendNotFoundUser(res);
		}

		//비밀번호 일치하지 않음
		if (result === -1) {
			return sendNotMatchPassword(res);
		}

		//회원탈퇴 성공 result === 1
		res.status(200).json({
			user: {
				email: user.email,
				nickname: user.nickname,
			},
			message: "회원탈퇴가 완료되었습니다.",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = deleteAccount;
