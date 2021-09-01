const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

//import router
const usersRouter = require("./routes/users");
const storesRouter = require("./routes/stores");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(core());

//요청 확인 로그 미들웨어
app.use((req, res, next) => {
	console.log(req.method, req.url);
	console.log(req.body);
	console.log("-----------------------");
	console.log();
	next();
});

app.use("/users", usersRouter);
app.use("/stores", storesRouter);

app.get("/", (req, res) => {
	res.send("hello, world");
});

app.use((err, req, res, next) => {
	console.log("Error In Server");
	console.error(err);
	res.status(500).json({
		message: "Error In Server",
	});
});

app.listen(8080, () => {
	console.log("Worsca 서버 구동중 ...");
});
