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
  photo: [
    {
      type: String,
      default: "no-photo.jpg",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  vendor: {
    type: mongoose.Schema.ObjectId,
    ref: "Vendor",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

// Static method to get avg of course tuitions
ProductSchema.statics.getAverageCost = async function (vendorId) {
  const obj = await this.aggregate([
    {
      $match: { vendor: vendorId },
    },
    {
      $group: {
        _id: "$vendor",
        averageCost: { $avg: "$tuition" },
      },
    },
  ]);

  try {
    await this.model("Vendor").findByIdAndUpdate(vendorId, {
      averageCost: Math.ceil(obj[0].averageCost / 10) * 10,
    });
  } catch (err) {
    console.error(err);
  }
};

// Call getAverageCost after save
ProductSchema.post("save", function () {
  this.constructor.getAverageCost(this.vendor);
});

// Call getAverageCost before remove
ProductSchema.pre("remove", function () {
  this.constructor.getAverageCost(this.vendor);
});

module.exports = mongoose.model("Product", ProductSchema);
