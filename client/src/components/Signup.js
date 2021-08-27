import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

//FORM
const Form = styled.form`
	background: #38d9a9;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
	margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
	height: 500px;
	width: 500px;
	margin-top: 10rem;
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	color: white;
	input {
		color: black;
		text-align: center;
		background: white;
		height: 2rem;
		margin-left: 3rem;
		margin-right: 3rem;
		margin-bottom: 1.2rem;
		border-radius: 15px;
		::placeholder {
			color: #ced4da;
		}
	}
	button {
		margin-bottom: 10px;
		color: white;
		font-weight: bold;
		font-size: 1rem;
	}
`;

const Signup = () => {
	const [userInfo, setUserInfo] = useState({
		email: "",
		usernanme: "",
		password: "",
	});
	const [errorMessage, setErrorMessage] = useState("");
	const history = useHistory();
	const handleInputValue = (key) => (e) => {
		setUserInfo({ ...userInfo, [key]: e.target.value });
	};
	const handleSignup = () => {
		const { email, username, password } = userInfo;

		// 빈칸 유효성 검사
		if (!username || !email || !password) {
			return setErrorMessage("모든 항목은 필수 입니다");
		}
		// 비밀번호 / 비밀번호 확인 동일검사
		// 1 . password_re 만들어서 일치 불일치 확인
		// 2 . input창에 password가 불일치할때 false

		axios.post("https://localhost:4000/signup", userInfo).then((res) => {
			console.log("성공했습니다.");
		});
	};

	return (
		<Form>
			<h1>Welcome!</h1>
			<br />
			<h3>이메일</h3>
			<input placeholder="email" type="email" />

			<h3>닉네임</h3>
			<input placeholder="닉네임을 입력해주세요" type="name" />

			<h3>비밀번호</h3>
			<input placeholder="비밀번호를 입력해주세요" type="password" />

			<h3>비밀번호 확인</h3>
			<input placeholder="다시 한번 비밀번호를 입력해주세요" type="password" />
			<br />
			<button>취소</button>
			<button type="submit">회원 가입</button>
		</Form>
	);
};

export default Signup;
