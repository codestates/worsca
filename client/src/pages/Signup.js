import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/signup.png";
import axios from "axios";
import config from "../config";

const SignupSection = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
`;

const ImageBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50vw;
	cursor: pointer;
`;

const SignupBox = styled.form`
	background: #38d9a9;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
	margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
	height: 100vh;
	width: 50vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #f5f5f3;
	input {
		color: black;
		text-align: center;
		background: #f5f5f3;
		height: 2rem;
		width: 36vw;
		margin-left: 3rem;
		margin-right: 3rem;
		margin-bottom: 1.2rem;
		border-radius: 15px;
		&::placeholder {
			color: #38d9a9;
		}
	}
`;

const SignupBtn = styled.div`
	display: flex;
	.btn {
		margin-bottom: 10px;
		color: #f5f5f3;
		font-weight: bold;
		font-size: 1rem;
		&:hover {
			transform: scale(1.06);
		}
		border: 3px solid #f5f5f3;
		background-color: #38d9a9;
		color: #f5f5f3;
		height: 2.4rem;
		width: 5rem;
		margin: 0.5rem;
		border-radius: 15px;
	}
	.signup_google_btn {
		border: 3px solid #dc422e;
		background-color: #dc422e;
	}
	.signup_naver_btn {
		border: 3px solid #30ca4a;
		background-color: #30ca4a;
	}
`;

const Signup = ({ login }) => {
	const [userInfo, setUserInfo] = useState({
		email: "",
		nickname: "",
		password: "",
	});
	const [errorMessage, setErrorMessage] = useState("");
	const history = useHistory();
	const handleInputValue = (key) => (e) => {
		setUserInfo({ ...userInfo, [key]: e.target.value });
	};
	const handleSignup = (e) => {
		const { email, username, password } = userInfo;

		// 빈칸 유효성 검사
		// if (!username || !email || !password) {
		// 	setErrorMessage("모든 항목은 필수 입니다");
		// 	return;
		// }

		// 비밀번호 / 비밀번호 확인 동일검사
		// 1 . password_re 만들어서 일치 불일치 확인
		// 2 . input창에 password가 불일치할때 false
		e.preventDefault();

		axios
			.post(`${config.serverUrl}/users/signup`, userInfo)
			.then(() => {
				alert("회원가입 되었습니다! 로그인 해주세요.");
			})
			.then(() => {
				return history.push("/login");
			});
	};

	return (
		<SignupSection>
			{login && <Redirect to="/" />}
			<ImageBox>
				<Link to="/">
					<img src={logo} alt="worsca" className="main__title__text"></img>
				</Link>
			</ImageBox>
			<SignupBox>
				<h1>Welcome!</h1>
				<br />
				<h3>이메일</h3>
				<input
					placeholder="이메일을 입력해주세요"
					type="email"
					onChange={handleInputValue("email")}
				/>

				<h3>닉네임</h3>
				<input
					placeholder="닉네임을 입력해주세요"
					type="name"
					onChange={handleInputValue("nickname")}
				/>

				<h3>비밀번호</h3>
				<input
					placeholder="비밀번호를 입력해주세요"
					type="password"
					onChange={handleInputValue("password")}
				/>

				<h3>비밀번호 확인</h3>
				<input
					placeholder="다시 한번 비밀번호를 입력해주세요"
					type="password"
					onChange={handleInputValue("password")}
				/>
				<br />
				<SignupBtn>
					{/* <button className="btn signup_google_btn">Google</button>
					<button className="btn signup_naver_btn">Naver</button> */}

					<button className="btn" type="submit" onClick={handleSignup}>
						회원 가입
					</button>
				</SignupBtn>
			</SignupBox>
		</SignupSection>
	);
};

export default Signup;
