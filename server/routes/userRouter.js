const express = require("express");
const { userModel } = require("../models/userModel");

const userRouter = express.Router();

userRouter.get("/register", (req, res) => {
  res.send({ message: "Register Page" });
});
userRouter.get("/login", (req, res) => {
  res.send({ message: "login Page" });
});

module.exports = { userRouter };
