import React, { useState } from "react";

const ClickLogin = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: "",
	});
	const onClickLogin = (key) => (e) => {
		setLoginInfo({ ...loginInfo, [key]: e.target.value });
	};
	return (
		<>
			<input
				placeholder="이메일을 입력해주세요"
				type="email"
				onChange={onClickLogin("email")}
			/>
			<input
				placeholder="비밀번호를 입력해주세요"
				type="password"
				onChange={onClickLogin("password")}
			/>
		</>
	);
};
export default ClickLogin;
