import React from "react";
import styled from "styled-components";

//FORM
const Form = styled.form`
	background: #38d9a9;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
	margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
	height: 500px;
	width: 500px;
	margin-top: 10rem;
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	color: white;
	input {
		color: black;
		text-align: center;
		background: white;
		height: 2rem;
		margin-left: 3rem;
		margin-right: 3rem;
		margin-bottom: 1.2rem;
		border-radius: 15px;
		::placeholder {
			color: #ced4da;
		}
	}
	button {
		margin-bottom: 10px;
		color: white;
		font-weight: bold;
		font-size: 1rem;
	}
`;

const Signup = () => {
	return (
		<Form>
			<h1>Welcome!</h1>
			<br />
			<h3>이메일</h3>
			<input placeholder="email" type="email" />

			<h3>닉네임</h3>
			<input placeholder="닉네임을 입력해주세요" type="name" />

			<h3>비밀번호</h3>
			<input placeholder="비밀번호를 입력해주세요" type="password" />

			<h3>비밀번호 확인</h3>
			<input placeholder="다시 한번 비밀번호를 입력해주세요" type="password" />
			<br />
			<button>취소</button>
			<button type="submit">회원 가입</button>
		</Form>
	);
};

export default Signup;
