import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Mainpage from "./components/Mainpage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Map from "./components/Map";

const GlobalStyles = createGlobalStyle`
	* {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
  }
	body {
		@import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
		font-family: "Noto Sans KR", sans-serif !important;
		background-color: #F5F5F3;
		/* background-color: black; */
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	input {
		background-color: rgba(0, 0, 0, 0);
		border: 1px solid #38d9a9;
		color: #38d9a9;
		&::placeholder {
			color: #f5f5f3;
			font-weight: bold;
			font-size: 18px;
		}
	}
	button {
		border: 1px solid #38d9a9;
		background: none;
		cursor: pointer;
	}
`;

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route exact path="/">
					<Mainpage />
				</Route>
				<Route exact path="/map">
					<Map />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/signup">
					<Signup />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
