const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a course title"],
  },

  rate: {
    type: String,
    required: [true, "Please add rate"],
  },
  qty: {
    type: Number,
    required: [true, "Please add in qty"],
  },

  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  status: {
    type: String,
    enum: ["pending", "orderd"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  public: {
    type: mongoose.Schema.ObjectId,
    ref: "Public",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Order", ProductSchema);
