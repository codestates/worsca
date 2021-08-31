import React, { useState } from "react";
import styled from "styled-components";
import { StarOutlined, StarFilled } from "@ant-design/icons";

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
	.title {
		cursor: pointer;
		font-size: 1.5rem;
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

const Cafepage = ({ reverseBoo }) => {
	const [like_btn, setlike_btn] = useState(true);
	const onClick = () => {
		// 엑시오스 통신을 보내주면 될것 같다.
		// 북마크 true or false로
		// let url 변수 선언해서 요청한다.

		like_btn ? setlike_btn(false) : setlike_btn(true);
	};

	return (
		<CafeSection>
			<div className="title" onClick={reverseBoo}>
				스타빅스
			</div>
			// Like_BTN부분
			<div className="like_btn">
				{like_btn === true ? (
					<StarOutlined
						onClick={onClick}
						style={{ fontSize: "1.5rem", color: "#38d9a9" }}
					/>
				) : (
					<StarFilled
						onClick={onClick}
						style={{ fontSize: "1.5rem", color: "#38d9a9" }}
					/>
				)}
			</div>
			<Rating>
				<div className="rating_title">평점</div>
				<div className="star">★★★★★</div>
			</Rating>
			<div className="description">혼자 노트북들고 공부하기 좋은 뷰 맛집!</div>
		</CafeSection>
	);
};

export default Cafepage;
