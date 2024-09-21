const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "myselfyaswanth";

const app = express();

app.use(express.json());

const users = [];

function logger(req, res, next) {
  console.log(`${req.method} request called`);
  next();
}

app.post("/signup", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "sucessfully signed up..!",
  });
});

app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  let foundUser = null;

  console.log(username);
  console.log(password);

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    const token = jwt.sign({ username: username }, JWT_SECRET);
    console.log(token);
    res.json({
      token: token,
    });
    return;
  } else {
    res.json({
      message: "kindly register first",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  console.log(token);
  const decodedDate = jwt.verify(token, JWT_SECRET);

  if (decodedDate.username) {
    req.username = decodedDate.username;
    next();
  } else {
    res.json({
      message: "user is not logged in",
    });
  }
}

app.get("/me", logger, auth, function (req, res) {
  let foundUser1 = null;
  for (let i = 0; i < users.length; i++) {
    if ((users[i].username = req.username)) {
      foundUser1 = users[i];
    } else {
      res.json({
        meassage: "unauthorized token",
      });
    }
  }

  res.json({
    username: foundUser1.username,
    password: foundUser1.password,
  });
});

app.listen(3005);
