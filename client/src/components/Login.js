import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../img/worsca.png";
import video from "../video/loginpage.mp4";


// ! 스타일
const LoginPageSection = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	margin: 0 auto;
	position: relative;
	video {
		position: fixed;
		min-width: 100%;
		min-height: 100%;
		top: 0;
		left: 0;
		width: auto;
		height: auto;
		z-index: -1;
	}
	input {
		border: 3px solid #38d9a9;
		background-color: rgba(255, 255, 255, 0.05);
		height: 3vh;
		min-width: 250px;
		width: 45%;
		border-radius: 2vh;
		margin-top: 20px;
		text-align: center;

		font-weight: bold;
		&::placeholder {
			color: #38d9a9;
			text-align: center;
		}
	}
	.btn {
		width: 4rem;
		height: 2rem;
		margin: 1rem;
		border: 3px solid #38d9a9;
		border-radius: 1.5vh;
		color: #38d9a9;
		&:hover {
			transform: scale(1.1);
		}
	}



	.signup-btn {
		background: #38d9a9;
		.signup-link {
			color: #f5f5f3;
		}
	}
`;

const LoginBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 65vw;
	height: 100vh;
	background: #f5f5f3;
	.logo-link {
		margin-bottom: 50px;
	}
	img {
		height: 7rem;
	}
	.find-id-pwd {
		margin-top: 1rem;
		color: #38d9a9;
		&:after {
			display: block;
			width: 100%;
			content: "";
			border-bottom: solid 2px #38d9a9;
			transform: scaleX(0);
			transition: transform 250ms ease-in-out;
		}
		&:hover:after {
			transform: scaleX(1);
		}
	}
`;



// ! 핸들러
const clickButton = (e) => {
	console.log(e.target.value);
};


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
		<LoginPageSection>
			<video autoPlay muted loop>
				<source src={video} type="video/mp4"></source>
			</video>
			<LoginBox>
				<Link className="logo-link" to="/">
					<img src={logo} alt="worsca" className="main__title__text"></img>
				</Link>
				<input placeholder="이메일을 입력해주세요" type="email" />
				<input placeholder="비밀번호를 입력해주세요" type="password" />
				<Link className="find-id-pwd">아이디 및 비밀번호찾기</Link>
				<div>
					<button className="btn">LogIn</button>
					<button className="btn signup-btn">
						<Link to="/signup" className="signup-link">
							SignUp
						</Link>
					</button>
				</div>
			</LoginBox>
		</LoginPageSection>
	);
};

export default Login;
