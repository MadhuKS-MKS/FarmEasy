const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  catname: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
