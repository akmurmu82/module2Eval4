const express = require("express");
const { UserModel } = require("../models/userModel");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, gender, email, password } = req.body;
  try {
    const newUser = new UserModel({ email, password, gender, name });
    await newUser.save();

    res.status(201).send({ message: "new user has been created" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});
userRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  try {
    const dbUser = UserModel.find({ email });
    console.log(password, dbUser.password);
    if (dbUser) {
      if (password == dbUser.password) {
        res.status(200).send({ message: "Login successful" });
      } else {
        res.status(200).send({ message: "Wrong credentials" });
      }
    } else {
      res.status(200).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

module.exports = { userRouter };
