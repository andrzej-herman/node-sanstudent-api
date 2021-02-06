const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Season", seasonSchema);
