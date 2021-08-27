const express = require("express");

//import router
const signupRouter = require("./routes/users");

const app = express();

app.use(express.json());

//요청 확인 로그 미들웨어
app.use((req, res, next) => {
	console.log(req.method, req.url);
	console.log(req.body);
	console.log("-----------------------");
	next();
});

app.use("/users", signupRouter);

app.get("/", (req, res) => {
	res.send("hello, world");
});

app.listen(8080, () => {
	console.log("서버 시작");
});
