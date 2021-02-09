const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
// ! IMPORT ROUTES
const authRouter = require("./routes/auth");
const studentRouter = require("./routes/student");
const seasonRouter = require("./routes/season");
const subjectRouter = require("./routes/subject");

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
app.use("/auth", authRouter);
app.use("/student", studentRouter);
app.use("/season", seasonRouter);
app.use("/subject", subjectRouter);

// ! LISTEN
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server is running on port at http://localhost:${[port]}`)
);
