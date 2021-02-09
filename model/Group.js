const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  seasonId: {
    type: String,
  },
  seasonName: {
    type: String,
  },
  subjectId: {
    type: String,
  },
  subjectName: {
    type: String,
  },
  semester: {
    type: Number,
  },
  studyType: {
    type: String,
  },
  groupNumber: {
    type: Number,
  },
  day: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
});

module.exports = mongoose.model("Group", codeSchema);
