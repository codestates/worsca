import React, { useState } from "react";
import styled from "styled-components";
import { Link, Route, useHistory, Redirect } from "react-router-dom";
import video from "../video/mainpage.mp4";
import logo from "../img/worsca.png";
import Map from "./Map";

// ! 스타일

// 메인페이지 전체 스타일
const MainpageSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
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
`;

// title 스타일
const MainTitle = styled.div`
	font-weight: 800;
	top: 3vh;
	margin-bottom: 1rem;
	.main__title__text {
		height: 8rem;
		color: #f5f5f3;
	}
`;

// 검색창 스타일
const MainSearchbar = styled.form`
	border: 3px solid #38d9a9;
	background-color: rgba(255, 255, 255, 0.05);
	height: 5.4vh;
	min-width: 250px;
	width: 35vh;
	border-radius: 2vh;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	input {
		background-color: rgba(0, 0, 0, 0);
		margin-left: 16px;
		border: none;
		width: 80%;
		color: #f5f5f3;
		font-weight: bold;
		font-size: 18px;
		&::placeholder {
			color: #f5f5f3;
			font-weight: bold;
			font-size: 18px;
		}
	}
	button {
		border: none;
		background: none;
		margin-right: 24px;
		color: #f5f5f3;
		font-size: 22px;
	}
`;

const BtnBox = styled.div`
	display: flex;
	justify-content: flex-end;
	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
		color: #f5f5f3;
		font-weight: bold;
		font-size: 1rem;
		&:hover {
			transform: scale(1.06);
		}
		border: 3px solid #38d9a9;
		color: #f5f5f3;
		height: 2rem;
		width: 5rem;
		margin: 0.5rem;
		border-radius: 15px;
	}
`;

// 메인 인풋창에 value를 상태로 관리해야한다.
// 인풋창이 submit하면 => map창으로 이동
// 인풋창의 value를 map.js에서 결과값으로 가져온다.

const Mainpage = ({ login, loginHandler, inputHandler }) => {
	const [InputText, setInputText] = useState("");

	const history = useHistory();

	const onChange = (e) => {
		setInputText(e.target.value);
	};

	const onKeyPress = (e) => {
		if (e.key === "Enter") {
			inputHandler(InputText);
			history.push("/map");
		}
	};

	return (
		<>
			<BtnBox>
				{!login ? (
					<Link className="btn" to="/login">
						Login
					</Link>
				) : (
					<div className="btn" onClick={loginHandler}>
						Logout
					</div>
				)}
			</BtnBox>
			<MainpageSection>
				<MainTitle>
					<Link to="/">
						<img src={logo} alt="worsca" className="main__title__text"></img>
					</Link>
				</MainTitle>
				<MainSearchbar>
					<input
						placeholder="가고싶은 장소를 적어주세요"
						value={InputText}
						onChange={onChange}
						onKeyPress={onKeyPress}
					/>
					<button>Q</button>
				</MainSearchbar>
				<video autoPlay muted loop>
					<source src={video} type="video/mp4"></source>
				</video>
			</MainpageSection>
		</>
	);
};

export default Mainpage;
