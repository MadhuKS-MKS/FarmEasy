const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  catname: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Category", categorySchema);
