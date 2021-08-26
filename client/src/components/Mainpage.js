import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import video from "../video/mainpage.mp4";
import logo from "../img/worsca.png";

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
		width: 100%;
		z-index: -1;
		position: absolute;
	}
`;

// title 스타일
const MainTitle = styled.div`
	font-weight: 800;
	top: 3vh;
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
	width: 30%;
	border-radius: 2vh;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	input {
		background-color: rgba(0, 0, 0, 0);
		margin-left: 16px;
		border: none;
		width: 80%;
		color: #38d9a9;
		font-weight: bold;
		font-size: 18;
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
		color: #38d9a9;
		font-size: 22px;
	}
`;

// ! 이벤트 핸들러
const searchValue = (e) => {
	console.log(e.target.value);
};

const Mainpage = () => {
	return (
		<MainpageSection>
			<MainTitle>
				<Link to="/">
					<img src={logo} alt="worsca" className="main__title__text"></img>
				</Link>
			</MainTitle>
			<MainSearchbar onSubmit={(e) => e.preventDefault()}>
				<input
					placeholder="가고싶은 장소를 적어주세요"
					onChange={(e) => searchValue(e)}
				/>
				<button>Q</button>
			</MainSearchbar>
			<video autoPlay muted loop>
				<source src={video} type="video/mp4"></source>
			</video>
		</MainpageSection>
	);
};

export default Mainpage;
