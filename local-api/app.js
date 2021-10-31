const express = require('express');
// cors: Cross Origin Resource Sharing 의 약자로 api 를 요청할 때 동일 도메인 정책이 아닌 경우 사용하는 미들웨어
const cors = require('cors');
const app = express();
const PORT = 8080;
const { posts } = require('./data.js');

app.use(cors());
app.get('/api/posts', (req, res) => {
  // json 형식으로 변경
  res.json(posts);
});

app.listen(PORT, () => console.log(`server run ${ PORT }`));