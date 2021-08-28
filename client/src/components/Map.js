import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import styled from "styled-components";
import logo from "../img/worsca.png";
import hamburger from "../img/hamburger.png";
import Cafepage from "./Cafepage";
import Modal from "react-modal";
import CafeModal from "./CafeModal";
import Mapping from "./Mapping";
import Mypage from "./Mypage";
import CafeAuto from "./CafeAuto";


const MapSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	margin: 0 auto;
	position: relative;
	color: #f5f5f3;
`;

const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 2rem;
	padding: 0.5rem;
	background: #f5f5f3;
	border: 1px solid #38d9a9;
	z-index: 1;
	.logo {
		display: flex;
		justify-content: flex-start;
		img {
			height: 2rem;
		}
	}
`;

const SearchBox = styled.form`
	border: 3px solid #38d9a9;
	background-color: rgba(255, 255, 255, 0.05);
	height: 2rem;
	min-width: 250px;
	width: 30%;
	border-radius: 2vh;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	z-index: 1;
	input {
		background-color: rgba(0, 0, 0, 0);
		margin-left: 16px;
		border: none;
		width: 80%;
		font-weight: 500;
		color: black;
		font-size: 13px;
		&::placeholder {
			color: black;
			font-size: 13px;
			font-weight: 500;
		}
	}
	button {
		border: none;
		background: none;
		margin-right: 24px;
		color: black;
		font-size: 15px;
		font-weight: 500;
	}
`;

const NavBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	img {
		height: 3rem;
	}
`;

const CafeBox = styled.div`
	display: flex;
	margin-top: auto;
	width: 100vw;
	overflow-x: auto;
	z-index: 1;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

// map되는지 테스트용 배열
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Map = () => {
	const [boo, setBoo] = useState(false);
	const [mypage, setMypage] = useState(false);
	const [login, setLogin] = useState(false);

	// handler
	const reverseBoo = () => {
		setBoo(!boo);
	};

	const mypageToggle = () => {
		setMypage(!mypage);
	};

	return (
		<MapSection>
			<Modal
				isOpen={boo}
				style={{
					overlay: {
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(255, 255, 255, 0.75)",
						zIndex: 2,
					},
					content: {
						position: "absolute",
						top: "80px",
						left: "80px",
						right: "80px",
						bottom: "80px",
						border: "1px solid #ccc",
						background: "#fff",
						overflow: "auto",
						WebkitOverflowScrolling: "touch",
						borderRadius: "4px",
						outline: "none",
						padding: "20px",
						zIndex: 2,
					},
				}}
				onRequestClose={() => reverseBoo()}
			>
				<CafeModal reverseBoo={reverseBoo}></CafeModal>
			</Modal>
			<Modal
				isOpen={mypage}
				style={{
					overlay: {
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "none",
						zIndex: 2,
					},
					content: {
						position: "absolute",
						minWidth: "400px",
						top: "60px",
						left: "75vw",
						right: "10px",
						bottom: "210px",
						border: "1px solid #ccc",
						background: "#fff",
						overflow: "auto",
						WebkitOverflowScrolling: "touch",
						borderRadius: "4px",
						outline: "none",
						padding: "0",
						zIndex: 2,
					},
				}}
				onRequestClose={() => mypageToggle()}
			>
				<Mypage />
			</Modal>

			<Mapping />
			<Nav>
				<Link className="logo" to="/">
					<img src={logo} alt="worsca"></img>
				</Link>
				<NavBtn>
					<SearchBox>
						<input placeholder="검색" />
						<button>Q</button>
					</SearchBox>
					{!login ? (
						<img onClick={mypageToggle} src={hamburger} alt="worsca"></img>
					) : (
						<Redirect to="/login" />
					)}
				</NavBtn>
			</Nav>
			<CafeBox>
				{arr.map((el) => {
					return <Cafepage reverseBoo={reverseBoo}></Cafepage>;
				})}
			</CafeBox>
		</MapSection>
	);
};

export default Map;
