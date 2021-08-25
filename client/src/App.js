import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Mainpage from "./components/Mainpage";

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
		/* background-color: #F5F5F3; */
		background-color: black;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	button {
		border: none;
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
				<Route exact path="/map"></Route>
				<Route exact path="/login"></Route>
				<Route exact path="/signup"></Route>
			</Switch>
		</Router>
	);
}

export default App;
