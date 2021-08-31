const sendBadRequest = (res) => {
	return res.status(400).json({
		message: "잘못된 요청입니다.",
	});
};

const sendNotFoundUser = (res) => {
	return res.status(401).json({
		message: "해당 유저가 존재하지 않습니다.",
	});
};

const sendNotMatchPassword = (res) => {
	return res.status(401).json({
		message: "비밀번호가 일치하지 않습니다.",
	});
};

const sendNotFoundReview = (res) => {
	res.status(409).json({
		message: "해당 리뷰가 없습니다.",
	});
};

const sendUnauthorizedToken = (res, err) => {
	if (err === null) {
		return res.status(401).json({
			errorName: "HeaderAuthorizationEmptyError",
			errorMessage: "authorization empty",
			message: "Authorization 헤더가 비어있습니다.",
		});
	}
	const { name, message } = err;

	const body = {
		errorName: name,
		errorMessage: message,
		message: "토큰 인증 실패",
	};

	switch (message) {
		case "jwt expired":
			body.message = "토큰 기간이 만료되었습니다.";
			break;
	}

	return res.status(401).json(body);
};

module.exports = {
	sendBadRequest,
	sendNotFoundUser,
	sendNotMatchPassword,
	sendNotFoundReview,
	sendUnauthorizedToken,
};
