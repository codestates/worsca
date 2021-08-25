import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
  }
`;

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/"></Route>
				<Route exact path="/map"></Route>
				<Route exact path="/login"></Route>
				<Route exact path="/signup"></Route>
			</Switch>
		</Router>
	);
}

export default App;
