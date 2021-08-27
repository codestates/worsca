const express = require("express");

//import router
const signupRouter = require("./routes/users");

const app = express();

app.use(express.json());

app.use("/users", signupRouter);

app.get("/", (req, res) => {
	res.send("hello, world");
});

app.listen(8080, () => {
	console.log("서버 시작");
});
