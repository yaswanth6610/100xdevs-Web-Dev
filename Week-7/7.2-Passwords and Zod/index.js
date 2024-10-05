const express = require("express");
const { UserModel, TodoModel } = require("./db");
const bcrypt = require("bcrypt");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { z } = require("zod");

mongoose.connect(
  "mongodb+srv://yaswanth:VSILZOxoRVP5kArL@cluster0.qaouq.mongodb.net/Todo-App"
);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(3).max(20).email(),
    name: z.string().min(5),
    password: z.string().min(3).max(25),
  });

  // const parseData = requiredBody.parse(req.body);
  const parseDataWithSuccess = requiredBody.safeParse(req.body); //{success, data, error}

  if (!parseDataWithSuccess.success) {
    res.json({
      message: "Incorrent format",
      error: parseDataWithSuccess.error,
    });
    return;
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hashedPassword = await bcrypt.hash(password, 5);

  await UserModel.create({
    email: email,
    password: hashedPassword,
    name: name,
  });

  res.json({
    message: "You are signed up",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });

  if (!response) {
    res.status(403).json({
      message: "User not exists!",
    });
    return;
  }

  const passwordsMatch = await bcrypt.compare(password, response.password);

  if (!passwordsMatch) {
    res.status(403).json({
      message: "Incorrect Credentials!",
    });
  } else {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(5000);
