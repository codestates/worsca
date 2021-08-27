import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const LoginPage = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-top: 25vh;
	font-size: 1rem;

	input {
		font-weight: bold;
		border-radius: 20px;
		color: white;
		font-size: 15px;
		width: 300px;
		border: 3px solid;
		outline: none;
		border-radius: 0px;
		line-height: 2.5rem;
		font-size: 1.2rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
	h1 {
		text-align: left;
		color: white;
	}
`;
const Label = styled.div`
	font-size: 4rem;
	color: #ffffff;
	/* margin: auto;
	text-decoration: none; */
`;
const Button = styled.button`
	width: 150px;
	margin-top: 1rem;
	padding-top: 0.6rem;
	padding-bottom: 0.5rem;
	background: 38d9a9;
	border-color: #ffffff;
	color: white;
	text-align: center;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	user-select: none;
	transition: 0.2s all;
	/* text-decoration: none;  */
	&:hover {
		background: #38d9a9;
	}
	&:active {
		background: #38d9a9;
	}
`;
const ShadowBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #38d9a9;
	height: 100vh;
	margin-top: 100px;
	margin-bottom: 100px;
	margin-left: 400px;
	margin-right: 400px;
`;
const Login = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: "",
	});
	axios
		.post("https://localhost:3000/login", loginInfo, {
			withCredentials: true,
		})
		.then((el) => console.log("콘솔"));
	const [errorMessage, setErrorMessage] = useState("");
	const onClickLogin = (key) => (e) => {
		setLoginInfo({ ...loginInfo, [key]: e.target.value });
	};

	const clickLogin = () => {
		if (!loginInfo.email || !loginInfo.password) {
			alert("이메일과 비밀번호를 입력하세요");
			setErrorMessage("이메일과 비밀번호를 입력하세요");
			return;
		}
	};
	return (
		<ShadowBox>
			<LoginPage>
				<div>
					<form onSubmit={(e) => e.preventDefault()}>
						<Label>
							<Link to="/">워스카</Link>
						</Label>
					</form>
				</div>
				<h1>로그인</h1>
				<input placeholder="이메일" type="email" onChange={onClickLogin} />
				<input placeholder="비밀번호" type="password" onChange={onClickLogin} />
				<div>
					<Button onClick={clickLogin}>로그인</Button>
					<Button>
						<Link to="/signup">회원가입</Link>
					</Button>
				</div>
				<div className="alert-box">{errorMessage}</div>
			</LoginPage>
		</ShadowBox>
	);
};

export default Login;
