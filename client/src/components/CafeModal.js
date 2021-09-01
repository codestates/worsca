import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import config from "../config";

// img
import coffee from "../img/coffee.jpg";
import coffee1 from "../img/coffee1.jpg";
import coffee2 from "../img/coffee2.jpg";
import homepage from "../img/homepage.png";
import instagram from "../img/instagram.png";
import reviewImg from "../img/review.png";

const CafeModalSection = styled.div`
	display: flex;
	flex-direction: column;
	.sub_title {
		font-size: 1.6rem;
		margin-bottom: 1.4rem;
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

const CafeTitle = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
	.title {
		font-size: 3rem;
		font-weight: bold;
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
	.btn {
		cursor: pointer;
	}
`;

const CafeSection = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CafeSectionMenu = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 2vh;
	border: none;
	height: 70vh;
	width: 45vw;
	background-color: rgba(255, 255, 255, 0.05);
	padding: 0.5em;
	box-sizing: border-box;
	margin-right: 2rem;
	margin-bottom: 1rem;
	.imgBox {
		display: flex;
		width: 100%;
		height: 18rem;
		padding: 0;
		box-sizing: border-box;
		overflow-x: auto;
		border: 3px solid #38d9a9;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	img {
		width: 100%;
		height: 100%;
	}

	.hashtag {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.6rem;
		margin-bottom: 2rem;
		li {
			font-weight: bold;
			margin-left: 4px;
			color: #2482a3;
		}
	}

	.ratingBox {
		display: flex;
		flex-direction: column;
		margin-left: 3rem;
	}

	.ratingTitle {
		font-size: 1.4rem;
	}

	.star {
		display: flex;
		font-size: 3rem;
		margin-left: 2rem;
	}

	.yelloStar {
		display: flex;
		color: gold;
	}

	.blackStar {
		display: flex;
	}
`;

const CafeSectionDesBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 32vw;
	margin-right: 2rem;
	background-color: rgba(255, 255, 255, 0.05);
	padding: 0.5em;
	box-sizing: border-box;
	.des {
		height: 18rem;
		margin-bottom: 2rem;
		box-sizing: border-box;
		letter-spacing: 5px;
		line-height: 23px;
	}
	.address {
		margin-bottom: 3rem;
	}
	.btnBox {
		display: flex;
		justify-content: center;
		.btn {
			width: 65px;
			height: 65px;
			background-color: none;
			margin-right: 1rem;
			cursor: pointer;
			&:hover {
				transform: scale(1.1);
			}
		}
		img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
`;

const ReviewBox = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 110px;

	.title {
		font-size: 1.4rem;
		margin-bottom: 7px;
	}
	input {
		width: 100%;
		height: 100px;
		margin-bottom: 8px;
		padding-left: 10px;
		border-radius: 1vh;
		&::placeholder {
			color: gray;
			font-weight: 400;
			font-size: 14px;
		}
	}
`;

const CafeModal = ({ reverseBoo, store, accessToken }) => {
	const { reviewData } = store;
	const [reviewTogle, setReview] = useState(false);
	const [reviewInfo, setReviewInfo] = useState({
		contents: "",
		rating: 0,
		decibel: 0,
	});

	const onClickReview = (key) => (e) => {
		setReviewInfo({ ...reviewInfo, [key]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		// 리뷰 값 보내기
		axios
			.post(`${config.serverUrl}/stores/${store.id}/reviews`, reviewInfo, {
				headers: {
					authorization: `bearer ${accessToken}`,
				},
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// 문구 아이디 정할 랜덤 상수
	const randomNum = Math.floor(Math.random() * 2);

	// 카페 문구 배열
	const description = [
		`열정의 공간 ${"cafeName"}  Popping Up 

	커피를 사랑하는 우리 한국인들의 열정을 담고자 합니다. 
	
	바리스타 크루들의 열정과 낯설고 신선함을 모티브로 
	
	새로운 원두를 정기적으로 소개하며 소통하고자 합니다.`,
		`${"cafeName"}는 품질과 혁신에 최선을 다하여 
	${"cafeName"}를 찾는 모든 고객에게 최고의 커피 경험을 제공함으로 누구나
	
	마음껏 커피를 즐길 수 있는 커피 대중화의 선도적 역할을
	수행하겠습니다.`,
	];

	return (
		<CafeModalSection>
			<CafeTitle>
				<div className="title">{store.place_name}</div>
				<div className="btn" onClick={() => reverseBoo(store)}>
					❌
				</div>
			</CafeTitle>
			<CafeSection>
				<CafeSectionMenu>
					<div className="sub_title">메뉴</div>
					<div className="imgBox">
						<img src={coffee} alt="coffee"></img>
						<img src={coffee1} alt="coffee1"></img>
						<img src={coffee2} alt="coffee2"></img>
					</div>
					<ul className="hashtag">
						<li>#강남카페맛집</li>
						<li>#스터디</li>
					</ul>
					<div className="sub_title">리뷰</div>
					{reviewData.total_reviewers === 0 ||
					reviewData.total_reviewers === undefined ? (
						<div>등록된 리뷰가 없습니다.</div>
					) : (
						<div className="ratingBox">
							<div className="ratingTitle">평점</div>
							<div className="star">
								<div className="yelloStar">
									{"★".repeat(
										reviewData.total_rating / reviewData.total_reviewers
									)}
								</div>
								<div className="blackStar">
									{"★".repeat(
										5 - reviewData.total_rating / reviewData.total_reviewers
									)}
								</div>
							</div>
							<div className="ratingTitle">데시벨</div>
							<div className="star">
								<div className="yelloStar">
									{"★".repeat(
										reviewData.total_decibel / reviewData.total_reviewers
									)}
								</div>
								<div className="blackStar">
									{"★".repeat(
										5 - reviewData.total_decibel / reviewData.total_reviewers
									)}
								</div>
							</div>
						</div>
					)}
				</CafeSectionMenu>
				<CafeSectionDesBox>
					<div className="sub_title">카페 소개</div>
					<div className="des">{description[0]}</div>

					<div className="sub_title">주소</div>
					<div className="address">{store.road_address_name}</div>
					{reviewTogle ? (
						// setReview(!reviewTogle)
						<ReviewBox onSubmit={onSubmit}>
							<div className="title">리뷰 작성</div>
							<input
								type="number"
								onChange={onClickReview("rating")}
								placeholder="평점을 입력해주세요"
								min="1"
								max="5"
							/>
							<input
								type="number"
								onChange={onClickReview("decibel")}
								placeholder="데시벨을 입력해주세요"
								min="1"
								max="5"
							/>
							<button></button>
						</ReviewBox>
					) : (
						<div className="btnBox">
							<div
								className="review_btn btn"
								onClick={() => setReview(!reviewTogle)}
							>
								<img src={reviewImg} alt="review"></img>
							</div>
							<a className="homepage_btn btn" href={store.place_url}>
								<img src={homepage} alt="homepage"></img>
							</a>
							<div className="insta_btn btn">
								<img src={instagram} alt="instagram"></img>
							</div>
						</div>
					)}
				</CafeSectionDesBox>
			</CafeSection>
		</CafeModalSection>
	);
};

export default CafeModal;
