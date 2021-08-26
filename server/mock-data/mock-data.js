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

const logData = () => {
	console.log(data);
};

module.exports = {
	addMockData,
	containMockData,
	logData,
};
