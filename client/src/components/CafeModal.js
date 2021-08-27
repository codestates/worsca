import React from "react";
import styled from "styled-components";
import coffee from "../img/coffee.jpg";
import coffee1 from "../img/coffee1.jpg";
import coffee2 from "../img/coffee2.jpg";

const CafeModalSection = styled.div`
	display: flex;
	flex-direction: column;
	.sub_title {
		font-size: 2rem;
		margin-bottom: 1.4rem;
	}
`;

const CafeTitle = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
	.title {
		font-size: 3rem;
		font-weight: bold;
	}
	.btn {
		cursor: pointer;
	}
`;

const CafeSection = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CafeSectionDesBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 45vw;
	background-color: rgba(255, 255, 255, 0.05);
`;

const CafeSectionDes = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 2vh;
	border: 3px solid #38d9a9;
	height: 40vh;
	background-color: rgba(255, 255, 255, 0.05);
	padding: 0.5em;
	box-sizing: border-box;
	.address {
		margin-top: auto;
	}
`;

const CafeSectionMenu = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 2vh;
	border: 3px solid #38d9a9;
	height: 45vh;
	background-color: rgba(255, 255, 255, 0.05);
	padding: 0.5em;
	box-sizing: border-box;
	margin-bottom: 1rem;
	.imgBox {
		width: 22.5rem;
		height: 18rem;
		padding: 0;
		overflow: auto;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	img {
		width: 100%;
		height: 100%;
	}
`;

const CafeSectionReviewBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const CafeSectionReview = styled.div`
	display: flex;
	flex-direction: column;
	width: 43vw;
	height: 70vh;
	border-radius: 2vh;
	border: 3px solid #38d9a9;
	background-color: rgba(255, 255, 255, 0.05);
	padding: 0.5em;
	box-sizing: border-box;
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
				<CafeSectionDesBox>
					<CafeSectionMenu>
						<div className="sub_title">메뉴</div>
						<div className="imgBox">
							<img src={coffee} alt="coffee"></img>
							<img src={coffee1} alt="coffee1"></img>
							<img src={coffee2} alt="coffee2"></img>
						</div>
					</CafeSectionMenu>
					<CafeSectionDes>
						<div className="sub_title">설명</div>
						<div className="des">
							커피한잔의 여유와 일을 동시에 할 수있는 최적의 카페 공간은 없을까?
							서울시 최적의 카페에 정보를 알려드립니다.
						</div>
						<div className="address">서울특별시 강남구 테헤란로</div>
					</CafeSectionDes>
				</CafeSectionDesBox>
				<CafeSectionReviewBox>
					<CafeSectionReview>
						<div className="sub_title">리뷰</div>
						<div>
							<div>평점</div>
							<div>★★★★★</div>
						</div>
						<div>
							<div>데시벨</div>
							<div>★★★★★</div>
						</div>
					</CafeSectionReview>
					<div>리뷰 작성 및 홈페이지 인스타 버튼</div>
				</CafeSectionReviewBox>
			</CafeSection>
		</CafeModalSection>
	);
};

export default CafeModal;
