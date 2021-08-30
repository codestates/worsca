import { useState, useEffect } from "react";
import styled from "styled-components";

const deselectedOptions = [
	"강남구",
	"강동구",
	"광진구",
	"강북구",
	"구로구",
	"금천구",
	"서초구",
	"중랑구",
];

const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";

const InputContainer = styled.div`
	border: 3px solid #38d9a9;
	background-color: rgba(255, 255, 255, 0.05);
	height: 2rem;
	min-width: 250px;
	width: 30%;
	border-radius: 2vh;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	z-index: 1;
	input {
		background-color: rgba(0, 0, 0, 0);
		margin-left: 16px;
		border: none;
		width: 80%;
		font-weight: 500;
		color: black;
		font-size: 13px;
		&::placeholder {
			color: black;
			font-size: 13px;
			font-weight: 500;
		}
	}
	button {
		border: none;
		background: none;
		margin-right: 24px;
		color: black;
		font-size: 15px;
		font-weight: 500;
	}
`;
const DropDownContainer = styled.ul`
	background-color: #ffffff;
	display: block;
	margin-left: auto;
	margin-right: auto;
	list-style-type: none;
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	padding-inline-start: 0px;
	margin-top: -1px;
	padding: 0.1rem 0;
	border: 1px solid rgb(223, 225, 229);
	border-radius: 0 0 1rem 1rem;
	box-shadow: ${boxShadow};
	z-index: 3;
	> li {
		padding: 0 1rem;
		&:hover {
			background-color: #38d9a9;
		}
		&.selected {
			background-color: #38d9a9;
		}
	}
`;
const CafeAuto = () => {
	const [hasText, setHasText] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [options, setOptions] = useState(deselectedOptions);
	const [selected, setSelected] = useState(-1);

	useEffect(() => {
		if (inputValue === "") {
			setHasText(false);
		}
	}, [inputValue]);

	const handleInputChange = (event) => {
		const { value } = event.target;
		if (value.includes("\\")) {
			return;
		}

		value ? setHasText(true) : setHasText(false);

		setInputValue(value);

		const filterRegex = new RegExp(value, "i");
		const resultOptions = deselectedOptions.filter((option) =>
			option.match(filterRegex)
		);
		setOptions(resultOptions);
	};

	const handleDropDownClick = (clickedOption) => {
		setInputValue(clickedOption);
		const resultOptions = deselectedOptions.filter(
			(option) => option === clickedOption
		);
		setOptions(resultOptions);
	};

	const handleDeleteButtonClick = () => {
		setInputValue("");
	};

	const handleKeyUp = (event) => {
		if (
			event.getModifierState("Fn") ||
			event.getModifierState("Hyper") ||
			event.getModifierState("OS") ||
			event.getModifierState("Super") ||
			event.getModifierState("Win")
		) {
			return;
		}
		if (
			event.getModifierState("Control") +
				event.getModifierState("Alt") +
				event.getModifierState("Meta") >
			1
		) {
			return;
		}
		if (hasText) {
			if (event.code === "ArrowDown" && options.length - 1 > selected) {
				setSelected(selected + 1);
			}
			if (event.code === "ArrowUp" && selected >= 0) {
				setSelected(selected - 1);
			}
			if (event.code === "Enter" && selected >= 0) {
				handleDropDownClick(options[selected]);
				setSelected(-1);
			}
		}
	};

	return (
		<div className="autocomplete-wrapper" onKeyUp={handleKeyUp}>
			<InputContainer hasText={hasText}>
				<input
					type="text"
					className="autocomplete-input"
					onChange={handleInputChange}
					value={inputValue}
				/>
				<div className="delete-button" onClick={handleDeleteButtonClick}>
					&times;
				</div>
			</InputContainer>
			{hasText ? (
				<DropDown
					options={options}
					handleDropDownClick={handleDropDownClick}
					selected={selected}
				/>
			) : null}
		</div>
	);
};

export const DropDown = ({ options, handleDropDownClick, selected }) => {
	return (
		<DropDownContainer>
			{options.map((option, idx) => (
				<li
					key={idx}
					onClick={() => handleDropDownClick(option)}
					className={selected === idx ? "selected" : ""}
				>
					{option}
				</li>
			))}
		</DropDownContainer>
	);
};
export default CafeAuto;
