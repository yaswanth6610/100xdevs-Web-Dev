const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "yaswanthisaweb3devloper";

const app = express();

app.use(express.json());

const users = [];

// function generateToken() {
//   let options = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//   ];

//   let token = "";
//   for (let i = 0; i < 32; i++) {
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// }

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "you have sucessfullt signed UP",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let findUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      findUser = users[i];
    }
  }
  if (findUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    // findUser.token = token;
    res.send({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Please enter the valid username and password",
    });
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.token;
  const decodedtoken = jwt.verify(token, JWT_SECRET);
  const username = decodedtoken.username;

  let findUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      findUser = users[i];
    }
  }

  console.log(users);
  console.log(token);
  console.log(findUser);

  if (findUser) {
    res.send({
      username: findUser.username,
      password: findUser.password,
    });
  } else {
    res.status(403).send({
      message: "your token is invalid ",
    });
  }
});

app.listen(3000);
