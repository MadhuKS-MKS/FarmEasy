const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },

  price: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: [true, "Please add rate"],
  },
  qty: {
    type: Number,
    required: [true, "Please add in qty"],
  },
  photo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    default: "no-photo.jpg",
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
