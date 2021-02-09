const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  semester: {
    type: Number,
  },
});

module.exports = mongoose.model("Subject", subjectSchema);
