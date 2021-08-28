const sendBadRequest = (res) => {
  return res.status(400).json({
    message: "잘못된 요청입니다.",
  });
}

const sendNotFoundUser = (res) => {
  return res.status(401).json({
    message: "해당 유저가 존재하지 않습니다.",
  })
}

const sendNotMatchPassword = (res) => {
  return res.status(401).json({
    message: "비밀번호가 일치하지 않습니다.",
  })
}

module.exports = {
  sendBadRequest,
  sendNotFoundUser,
  sendNotMatchPassword
}