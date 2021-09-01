import React, { useState } from "react";
import styled from "styled-components";
import Cafepage from "./Cafepage";
import deleteBtn from "../img/delete.png";

const MypageSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background-color: black; */
	width: 100%;
	box-sizing: border-box;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const UserBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 2rem;
	margin-bottom: 2rem;
	padding: 1rem;
	border: 3px solid #38d9a9;
	.title {
		font-weight: bold;
		margin-right: 6px;
		font-size: 1.3rem;
	}
	.direction {
		display: flex;
		margin-bottom: 0.5rem;
		align-items: center;
	}
`;

const FavoriteBox = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 1rem;
	box-sizing: border-box;
	align-items: center;
	background: #ecedec;
	.deleteBtn {
		cursor: pointer;
		img {
			height: 100px;
		}
	}
`;

// map되는지 테스트용 배열
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Mypage = ({ onClick }) => {
	const [email, setEmail] = useState("codestate@gmail.com");
	const [nickname, setNickname] = useState("Kim coding");

	return (
		<MypageSection>
			<UserBox>
				<div className="direction">
					<div className="title">email: </div>
					<div>{email}</div>
				</div>
				<div className="direction">
					<div className="title">nickname: </div>
					<div>{nickname}</div>
				</div>
			</UserBox>
			{/* FavoriteBox.map으로 뿌려줄거 */}
			{arr.map((el) => {
				return (
					<FavoriteBox>
						<Cafepage className={el} onClick={onClick} />
						<div className="deleteBtn">
							<img src={deleteBtn} alt="deleteBtn"></img>
						</div>
					</FavoriteBox>
				);
			})}
		</MypageSection>
	);
};

export default Mypage;
