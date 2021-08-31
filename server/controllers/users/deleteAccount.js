const Users = require("../../dbconnector/Users");
const { verifyAuth } = require("../../auth/jwtToken");
const { validateBody } = require("../../util/validation");
const {
	sendBadRequest,
	sendNotFoundUser,
	sendNotMatchPassword,
	sendUnauthorizedToken,
} = require("../../util/response");

const deleteAccount = async (req, res, next) => {
	try {
		// Authorization 검사
		const user = verifyAuth(req.headers.authorization);
		if (user instanceof Error || user === null) {
			return sendUnauthorizedToken(res, user);
		}

		if (!validateBody(req.body, "password")) {
			return sendBadRequest(res);
		}

		const { password } = req.body;
		const result = await Users.remove(user.email, password);

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
