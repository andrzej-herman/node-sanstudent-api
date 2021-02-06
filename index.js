const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// ! IMPORT ROUTES
const authRouter = require("./routes/auth");

// ! ENVIRONMENT VARIABLES
dotenv.config();

// ! DB CONNECTION
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to Database");
  }
);

// ! MIDDLEWARE
app.use(express.json());

// ! ROUTE MIDDLEWARE
app.use("/api/user", authRouter);

// ! LISTEN
app.listen(3000, () => console.log("Server is running on port 3000"));
