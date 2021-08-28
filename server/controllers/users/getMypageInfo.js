const db = require("../../models");

const getMypageInfo = async (req, res) => {
	const { email } = req.params;

	// Authriztion 검사

	//user 찾기
	const user = await db.User.findOne({
		where: { email },
		include: [
			{
				model: db.Store,
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
		return res.status(401).send({
			message: "해당 유저 존재하지 않음",
		});
	}

	res.json({
		email: user.email,
		nickname: user.nickname,
		reviews: user.Reviews,
		bookmarks: user.Stores,
	});
};

module.exports = getMypageInfo;
