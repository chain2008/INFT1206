const express = require("express");
const bodyParser = require('body-parser');

var cors = require('cors')
const app = express();

// Parse JSON bodies and URL-encoded bodies
//app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const port = 9876;

const getRandomInt = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const getGameInfo = (userId) => {
  if (!userId) {
    userId = Math.random().toString(16).slice(2, 8);
  }

  return {
    userId,
    width: getRandomInt(10, 20),
    height: getRandomInt(4, 10),
    maxMoves: getRandomInt(8, 20),
    target: [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)],
  };
};

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/init", (_, res) => {
  return res.json(getGameInfo());
});

app.post("/inft", (req, res) => {
  return res.send(`${req.body.user_name} send ${req.body.user_file}`);
})

app.listen(port, () => {
  console.log(`Start INFG server at ${port}`);
});
