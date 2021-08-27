import React from "react";
import styled from "styled-components";

const CafeSection = styled.div`
	display: flex;
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
		font-size: 2rem;
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
	return (
		<CafeSection onClick={reverseBoo}>
			<div className="title">스타빅스</div>
			<Rating>
				<div className="rating_title">평점</div>
				<div className="star">★★★★★</div>
			</Rating>
			<div className="description">혼자 노트북들고 공부하기 좋은 뷰 맛집!</div>
		</CafeSection>
	);
};

export default Cafepage;
