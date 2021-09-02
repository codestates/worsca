import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import logo from "../img/worsca.png";
import video from "../video/loginpage.mp4";
import ClickSignIn from "../components/SignIn/ClickSignIn";
import ClickLogin from "../components/SignIn/ClickLogin";

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
	.alert-box {
		color: red;
	}

	.signup-btn {
		background: #38d9a9;
		.signup-link {
			color: #f5f5f3;
		}
	}
`;

const LoginBox = styled.form`
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

const Login = ({ login }) => {
	return (
		<LoginPageSection>
			{login && <Redirect to="/" />}
			<video autoPlay muted loop>
				<source src={video} type="video/mp4"></source>
			</video>
			<LoginBox onSubmit={(e) => e.preventDefault()}>
				<Link className="logo-link" to="/">
					<img src={logo} alt="worsca" className="main__title__text"></img>
				</Link>
				<ClickLogin />
				<Link className="find-id-pwd">아이디 및 비밀번호찾기</Link>
				<ClickSignIn />
			</LoginBox>
		</LoginPageSection>
	);
};

export default Login;
