import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link } from "react-router-dom";
import Map from "./Map";
import styled from "styled-components";

const CafeAuto = () => {
	const items = [
		// 데이터 베이스에서 가져오면 된다.
		// 카페목록들...
		{
			id: 0,
			name: "강남구",
		},
		{
			id: 1,
			name: "서초구",
		},
		{
			id: 2,
			name: "광진구",
		},
		{
			id: 3,
			name: "동작구",
		},
		{
			id: 4,
			name: "강동구",
		},
	];

	// const SearchBox = styled.form`
	// 	border: 3px solid #38d9a9;
	// 	background-color: rgba(255, 255, 255, 0.05);
	// 	height: 2rem;
	// 	min-width: 250px;
	// 	width: 30%;
	// 	border-radius: 2vh;
	// 	display: flex;
	// 	justify-content: space-between;
	// 	box-sizing: border-box;
	// 	z-index: 1;
	// 	input {
	// 		background-color: rgba(0, 0, 0, 0);
	// 		margin-left: 16px;
	// 		border: none;
	// 		width: 80%;
	// 		font-weight: 500;
	// 		color: black;
	// 		font-size: 13px;
	// 		&::placeholder {
	// 			color: black;
	// 			font-size: 13px;
	// 			font-weight: 500;
	// 		}
	// 	}
	// 	button {
	// 		border: none;
	// 		background: none;
	// 		margin-right: 24px;
	// 		color: black;
	// 		font-size: 15px;
	// 		font-weight: 500;
	// 	}
	// `;
	const handleOnSearch = (string, results) => {
		// onSearch will have as the first callback parameter
		// the string searched and for the second the results.
		console.log(string, results);
	};

	const handleOnHover = (result) => {
		// the item hovered
		console.log("온호벌");
	};

	const handleOnSelect = (item) => {
		// the item selected
		console.log("온셀렉트");
	};

	const handleOnFocus = () => {
		console.log("포커스");
	};

	const formatResult = (item) => {
		return item;
		// return (<p dangerouslySetInnerHTML={{__html:
		// '<strong>'+item+'</strong>'}}></p>); //To format result as html
	};

	return (
		<div className="App">
			<header className="App-header">
				<div style={{ width: 400 }}>
					{/* <SearchBox> */}
					{/* <Link to="/map"> */}
					<ReactSearchAutocomplete
						items={items}
						onSearch={handleOnSearch}
						onHover={handleOnHover}
						onSelect={handleOnSelect}
						onFocus={handleOnFocus}
						autoFocus
						formatResult={formatResult}
					/>
					{/* </Link> */}
					{/* </SearchBox> */}
				</div>
			</header>
		</div>
	);
};

export default CafeAuto;
