import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./index.css";
import App from "./App";
// import CafeAuto from "./components/CafeAuto";

ReactDOM.render(
	<React.StrictMode>
		<App />
		{/* <CafeAuto /> */}
	</React.StrictMode>,
	document.getElementById("root")
);

Modal.setAppElement("#root");
