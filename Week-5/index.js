const express = require("express");

const app = express();

app.get("/sum/:firstArg/:secondArg", function (req, res) {
  let a = parseInt(req.params.firstArg);
  let b = parseInt(req.params.secondArg);

  res.json({ answer: a + b });
});

app.get("/multiply/:firstArg/:secondArg", function (req, res) {
  let a = parseInt(req.params.firstArg);
  let b = parseInt(req.params.secondArg);
  res.json({ answer: a * b });
});

app.get("/divide/:firstArg/:secondArg", function (req, res) {
  let a = parseInt(req.params.firstArg);
  let b = parseInt(req.params.secondArg);
  res.json({ answer: a / b });
});

app.get("/subtract/:firstArg/:secondArg", function (req, res) {
  let a = parseInt(req.params.firstArg);
  let b = parseInt(req.params.secondArg);
  res.json({ answer: a - b });
});

app.listen(3000);
