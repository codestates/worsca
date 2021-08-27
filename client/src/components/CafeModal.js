import React from "react";
import styled from "styled-components";
import coffee from "../img/coffee.jpg";
import coffee1 from "../img/coffee1.jpg";
import coffee2 from "../img/coffee2.jpg";
import homepage from "../img/homepage.png";
import instagram from "../img/instagram.png";
import review from "../img/review.png";

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
		margin-bottom: 2rem;
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

const CafeModal = ({ reverseBoo }) => {
	return (
		<CafeModalSection>
			<CafeTitle>
				<div className="title">스타빅스</div>
				<div className="btn" onClick={reverseBoo}>
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
					<div className="sub_title">리뷰</div>
					<div className="ratingBox">
						<div className="ratingTitle">평점</div>
						<div className="star">
							<div className="yelloStar">★★★★</div>
							<div className="blackStar">★</div>
						</div>
						<div className="ratingTitle">
							<div className="ratingTitle">데시벨</div>
							<div className="star">
								<div className="yelloStar">★★</div>
								<div className="blackStar">★★★</div>
							</div>
						</div>
					</div>
				</CafeSectionMenu>
				<CafeSectionDesBox>
					<div className="sub_title">카페 소개</div>
					<div className="des">
						스타빅스는 품질과 혁신에 최선을 다하여 <br />
						스타빅스를 찾는 모든 고객에게 최고의 커피 경험을 제공함으로 누구나
						<br />
						마음껏 커피를 즐길 수 있는 커피 대중화의 선도적 역할을
						수행하겠습니다.
					</div>

					<div className="sub_title">주소</div>
					<div className="address">
						서울특별시 강남구 역삼동 강남대로102길 34
					</div>

					<div className="btnBox">
						<div className="review_btn btn">
							<img src={review} alt="review"></img>
						</div>
						<div className="homepage_btn btn">
							<img src={homepage} alt="homepage"></img>
						</div>
						<div className="insta_btn btn">
							<img src={instagram} alt="instagram"></img>
						</div>
					</div>
				</CafeSectionDesBox>
			</CafeSection>
		</CafeModalSection>
	);
};

export default CafeModal;
