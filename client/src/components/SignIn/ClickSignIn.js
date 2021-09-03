import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config";

const ClickSignIn = ({ loginHandler }) => {
	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: "",
	});
	const [errorMessage, setErrorMessage] = useState("");
	const onSignIn = () => {
		axios
			.post(`${config.serverUrl}/users/signin`, loginInfo, {
				withCredentials: true,
			})
			.then((res) => loginHandler(res.data));
		if (!loginInfo.email || !loginInfo.password) {
			setErrorMessage("이메일과 비밀번호를 입력하세요");
			return;
		}
	};
	return (
		<>
			<div>
				<button className="btn" onClick={onSignIn}>
					LogIn
				</button>
				<button className="btn signup-btn">
					<Link to="/signup" className="signup-link">
						SignUp
					</Link>
				</button>
				<div className="alert-box">{errorMessage}</div>
			</div>
		</>
	);
};
export default ClickSignIn;
