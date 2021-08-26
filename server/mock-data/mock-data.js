const data = [
	{
		email: "test@test.com",
		password: "1234",
		nickname: "test123",
	},
];

const addMockData = (email, password, nickname) => {
	data.push({
		email,
		password,
		nickname,
	});
};

const containMockData = (email) => {
	const finded = data.find((user) => {
		return user.email === email;
	});
	return finded !== undefined;
};

const findMockData = (email) => {
	console.log("받은 이메일" + email);
	return data.find((user) => {
		return user.email === email;
	});
};

const logData = () => {
	console.log(data);
};

module.exports = {
	addMockData,
	containMockData,
	findMockData,
	logData,
};
