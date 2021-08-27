import { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
	/* height: 30 rem; */
	text-align: center;
	/* margin: 120px auto; */
`;
const ModalBtn = styled.button`
	background-color: skyblue;
	text-decoration: none;
	border: none;
	padding: 20px;
	color: white;
	border-radius: 30px;
	/* cursor: grab; */
`;

const Modal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};
	return (
		<ModalContainer>
			<ModalBtn onClick={openModalHandler}>
				{isOpen === false ? "카페 정보가 궁금하신가요?" : ""}
			</ModalBtn>
		</ModalContainer>
	);
};
export default Modal;
