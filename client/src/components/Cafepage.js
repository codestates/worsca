import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
	.titleBox {
		display: flex;
		justify-content: space-between;
	}
	.title {
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

const Cafepage = ({ reverseBoo, data = "none" }) => {
	// 문구 아이디 정할 랜덤 상수
	const randomNum = Math.floor(Math.random() * 3);

	// 카페 문구 배열
	const description = [
		`혼자 노트북들고 공부하기 좋은 뷰 맛집!`,
		`조용하고 음악 좋은 아는 사람만 아는집`,
		`커피싸고 뷰좋음!!`,
	];

	const [store, setStore] = useState(1);
	const [star, setStar] = useState({
		rating: 4,
	});

	// 스토어안에 리뷰개수 받아오기
	axios
		.get("http://localhost:3000/stores/:storeId/reviews")
		.then((res) => res.data)
		.then((data) => setStore(data.length));

	// 리뷰 값 받아서 적용하기
	// 리뷰 총합 / 리뷰 개수
	axios
		.get("http://localhost:3000/stores/:storeId/reviews")
		.then((res) => res.data)
		.then((data) => {
			const rating = data.rating.reduce((a, c) => a + c);
			setStar({ rating: rating / store });
		});

	return (
		<CafeSection onClick={() => reverseBoo(data)}>
			<div className="titleBox">
				<div className="title">{data.place_name}</div>
				<div>❤︎</div>
			</div>
			<Rating>
				<div className="rating_title">평점</div>
				<div className="star">{"★".repeat(star.rating)}</div>
			</Rating>
			<div className="description">{description[0]}</div>
		</CafeSection>
	);
};

export default Cafepage;
