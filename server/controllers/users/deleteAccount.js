const db = require("../../models");
const { validateBody } = require("../../util/validation");
const { sendBadRequest, sendNotFoundUser, sendNotMatchPassword } = require("../../util/response");

const deleteAccount = async (req, res, next) => {
	try {
		if( !validateBody(req.body, 'email', 'password')) {
			return sendBadRequest(res);
		}

		const { email, password } = req.body;
		const user = await db.User.findOne({ where: { email } });
		
		if (user === undefined || user === null) {
			return sendNotFoundUser(res);
		}

		if (user.password !== password) {
			return sendNotMatchPassword(res);
		}

		await user.destroy();
		res.status(201).json({
			message: "회원탈퇴가 완료되었습니다.",
		});

	} catch (err) {
		next(err);
	}
};

module.exports = deleteAccount;
