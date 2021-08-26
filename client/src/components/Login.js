import React from "react";
import styled from "styled-components";

const LoginPage = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-top: 25vh;
	font-size: 1rem;

	input {
		/* 
		text-align: left;
		width: 300px;
		margin-bottom: 2rem;
		padding-left: 1rem;
		&::placeholder {
			*/
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
	margin: auto;
`;
const Button = styled.button`
	/*
	padding: 5px;
	border-radius: 20px;
	height: 1.5rem;
	padding-left: 1rem;
	text-align: center;
	border: 1px solid #f5f5f3;
	background: none;
	cursor: pointer;
	background-color: #38d9a9;
	font-size: 13px;
	 */
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
const clickButton = (e) => {
	console.log(e.target.value);
};

const Login = () => {
	return (
		<ShadowBox>
			<LoginPage>
				<div>
					<Label>워스카</Label>
				</div>
				<h1>로그인</h1>
				<input placeholder="이메일" type="email" />
				<input placeholder="비밀번호" type="password" />
				<a>아이디 및 비밀번호찾기</a>
				<div>
					<Button>로그인</Button>
					<Button>회원가입</Button>
				</div>
			</LoginPage>
		</ShadowBox>
	);
};

export default Login;
