import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import config from "../../config";

// img
import coffee from "../../img/coffee.jpg";
import coffee1 from "../../img/coffee1.jpg";
import coffee2 from "../../img/coffee2.jpg";
import homepage from "../../img/homepage.png";
import instagram from "../../img/instagram.png";
import reviewImg from "../../img/review.png";

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
			justify-content: flex-end;
		}
	}
`;

const ReviewBox = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 170px;

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
	.inputBtn {
		margin-top: 10px;
		height: 60px;
		width: 80px;
		border-radius: 1vh;
		background-color: #38d9a9;
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
	console.log(reviewInfo);
	const onSubmit = (e) => {
		e.preventDefault();
		// ?????? ??? ?????????
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

		setReview(!reviewTogle);
	};

	// ?????? ????????? ?????? ?????? ??????
	const randomNum = Math.floor(Math.random() * 2);

	// ?????? ?????? ??????
	const description = [
		`????????? ?????? ${"cafeName"}  Popping Up 

	????????? ???????????? ?????? ??????????????? ????????? ????????? ?????????. 
	
	???????????? ???????????? ????????? ????????? ???????????? ???????????? 
	
	????????? ????????? ??????????????? ???????????? ??????????????? ?????????.`,
		`${"cafeName"}??? ????????? ????????? ????????? ????????? 
	${"cafeName"}??? ?????? ?????? ???????????? ????????? ?????? ????????? ??????????????? ?????????
	
	????????? ????????? ?????? ??? ?????? ?????? ???????????? ????????? ?????????
	?????????????????????.`,
	];

	return (
		<CafeModalSection>
			<CafeTitle>
				<div className="title">{store.place_name}</div>
				<div className="btn" onClick={() => reverseBoo(store)}>
					???
				</div>
			</CafeTitle>
			<CafeSection>
				<CafeSectionMenu>
					<div className="sub_title">??????</div>
					<div className="imgBox">
						<img src={coffee} alt="coffee"></img>
						<img src={coffee1} alt="coffee1"></img>
						<img src={coffee2} alt="coffee2"></img>
					</div>
					<ul className="hashtag">
						<li>#??????????????????</li>
						<li>#?????????</li>
					</ul>
					<div className="sub_title">??????</div>
					{reviewData.total_reviewers === 0 ||
					reviewData.total_reviewers === undefined ? (
						<div>????????? ????????? ????????????.</div>
					) : (
						<div className="ratingBox">
							<div className="ratingTitle">??????</div>
							<div className="star">
								<div className="yelloStar">
									{"???".repeat(
										reviewData.total_rating / reviewData.total_reviewers
									)}
								</div>
								<div className="blackStar">
									{"???".repeat(
										5 - reviewData.total_rating / reviewData.total_reviewers
									)}
								</div>
							</div>
							<div className="ratingTitle">?????????</div>
							<div className="star">
								<div className="yelloStar">
									{"???".repeat(
										reviewData.total_decibel / reviewData.total_reviewers
									)}
								</div>
								<div className="blackStar">
									{"???".repeat(
										5 - reviewData.total_decibel / reviewData.total_reviewers
									)}
								</div>
							</div>
						</div>
					)}
				</CafeSectionMenu>
				<CafeSectionDesBox>
					<div className="sub_title">?????? ??????</div>
					<div className="des">{description[0]}</div>

					<div className="sub_title">??????</div>
					<div className="address">{store.road_address_name}</div>
					{reviewTogle ? (
						// setReview(!reviewTogle)
						<ReviewBox onSubmit={onSubmit}>
							<div className="title">?????? ??????</div>
							<input
								type="number"
								onChange={onClickReview("rating")}
								placeholder="????????? ??????????????????"
								min="1"
								max="5"
							/>
							<input
								type="number"
								onChange={onClickReview("decibel")}
								placeholder="???????????? ??????????????????"
								min="1"
								max="5"
							/>
							<button className="inputBtn">?????? ??????</button>
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
