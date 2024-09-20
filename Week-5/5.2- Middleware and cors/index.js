const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

let requestCount = 0;

// function middleware(req, res, next) {
//   requestCount++;
//   console.log("Hi yash I went through the Middleware");
//   next();
// }

app.use(bodyParser.json());
app.use(cors());

// app.use(cors(), {
//   origin: "http://localhost:4000",
//   methods: "GET", "POST"
// })

// function loggerMiddleware(req, res, next) {
//   requestCount++;
//   console.log(`request Method : ${req.method}`);
//   console.log(`request URL : ${req.url}`);
//   console.log(`request time is : ${new Date()}`);
//   next();
// }

function realSum(req, res) {
  requestCount++;
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  console.log(a, b);

  console.log(`no .of request = ${requestCount}`);
  res.json({
    ans: a + b,
  });
}

function realMultiply(req, res) {
  requestCount++;
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  console.log(a, b);
  console.log(`no .of request = ${requestCount}`);
  res.json({
    ans: a * b,
  });
}

app.post("/sum", realSum);

app.post("/multiply", realMultiply);

app.listen(4000);
