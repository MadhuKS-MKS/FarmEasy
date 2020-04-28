const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: [true, "Please add a category"],
  },
  rate: {
    type: String,
    required: [true, "Please add rate"],
  },
  stock: {
    type: Number,
    required: [true, "Please add in stock"],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
