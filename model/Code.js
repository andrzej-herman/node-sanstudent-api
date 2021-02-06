const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  value: {
    type: String,
  },
  activated: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Code", codeSchema);
