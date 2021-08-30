const express = require("express");

//import router
const usersRouter = require("./routes/users");
const storesRouter = require("./routes/stores");

const app = express();

app.use(express.json());

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
	console.error(err);
	res.status(500).json({
		message: "Error In Server",
	});
});

app.listen(8080, () => {
	console.log("서버 시작");
});
