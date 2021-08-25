const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello, world');
});


app.listen(8080, () => {
  console.log('서버 시작');
});
