const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
// ! IMPORT ROUTES
const authRouter = require("./routes/auth");
const studentRouter = require("./routes/students");

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
app.use(cors());

// ! ROUTE MIDDLEWARE
app.use("/api/user", authRouter);
app.use("/api/student", studentRouter);

// ! LISTEN
app.listen(3000, () => console.log("Server is running on port 3000"));
