import React, { useState } from "react";
import styled from "styled-components";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import axios from "axios";

const CafeSection = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin: 0 13px 13px 13px;
	background: #f5f5f3;
	min-width: 310px;
	min-height: 180px;
	width: 310px;
	height: 180px;
	border-radius: 2vh;
	border: 1px solid #f5f5f3;
	color: black;
	padding: 10px;
	box-sizing: border-box;
	border: 1px solid #38d9a9;
	.titleBox {
		display: flex;
		justify-content: space-between;
	}
	.title {
		cursor: pointer;
		font-size: 1.3rem;
		margin-bottom: 1rem;
		font-weight: bold;
	}
	.description {
		overflow: hidden;
	}
`;

const Rating = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 1.4rem;
	.rating_title {
		font-size: 1.5rem;
	}
	.star {
		color: gold;
	}
`;

const Cafepage = ({
	reverseBoo,
	data = "none",
	ratingStar = "none",
	mapinfo,
}) => {
	const [like_btn, setlike_btn] = useState(true);
	const onClick = () => {
		// 엑시오스 통신을 보내주면 될것 같다.
		// 북마크 true or false로
		// let url 변수 선언해서 요청한다.
		like_btn
			? axios.post("http://210.205.235.71/users/bookmarks").then((data) => {
					mapinfo.push(data);
					setlike_btn(false);
			  })
			: setlike_btn(true);
	};
	console.log(mapinfo);

	// 문구 아이디 정할 랜덤 상수
	const randomNum = Math.floor(Math.random() * 3);

	// 카페 문구 배열
	const description = [
		`혼자 노트북들고 공부하기 좋은 뷰 맛집!`,
		`조용하고 음악 좋은 아는 사람만 아는집`,
		`커피싸고 뷰좋음!!`,
	];

	return (
		<CafeSection onClick={() => reverseBoo(data)}>
			<div className="title" onClick={reverseBoo}>
				{data.place_name}
			</div>
			<div className="like_btn">
				{like_btn === true ? (
					<StarOutlined
						onClick={onClick}
						style={{
							fontSize: "1.5rem",
							color: "#38d9a9",
							float: "right",
						}}
					/>
				) : (
					<StarFilled
						onClick={onClick}
						style={{
							fontSize: "1.5rem",
							color: "#38d9a9",
							// float: "right",
							// margin: "100px,-4px",
							margin: "0",
							padding: "0.5rem 1rem",
						}}
					/>
				)}
			</div>
			<Rating>
				<div className="rating_title">평점</div>
				<div className="star">
					{/* {"★".repeat(ratingStar.total_rating / ratingStar.total_reviewers)} */}
				</div>
			</Rating>
			<div className="description">{description[0]}</div>
		</CafeSection>
	);
};

export default Cafepage;
