const express = require("express");
const dotenv = require("dotenv");
const {userRouter} = require("./routes/userRouter");
const {connection} = require("./db");
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the Server" });
});

app.listen(port, async () => {
  try {
    await connection;
    console.log(`db is connected`);
    console.log(`Server is running on port: ${port}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
