const db = require("../../models");
const { sendBadRequest, sendNotFoundUser } = require("../../util/response");

const getMypageInfo = async (req, res, next) => {
	try{
		const { email } = req.params;

		if( email === undefined || email === null) {
			return sendBadRequest(res);
		}

		// Authriztion 검사

		//user 찾기
		const user = await db.User.findOne({
			where: { email },
			attributes: ["email", "nickname"],
			include: [
				{
					model: db.Store,
					attributes: {
						exclude: ["owner_id"],
					},
					through: {
						attributes: [],
					},
				},
				{
					model: db.Review,
				},
			],
		});

		//해당 유저 존재하지않음
		if (user === undefined || user === null) {
			return sendNotFoundUser(res);
		}
		
		//200 OK
		res.status(200).json({ 
			email: user.email,
			nickname: user.nickname,
			reviews: user.Reviews,
			bookmarks: user.Stores,
		});
	} catch(err) {
		next(err);
	}
	
};

module.exports = getMypageInfo;
