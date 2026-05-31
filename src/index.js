const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./user/user.router');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
