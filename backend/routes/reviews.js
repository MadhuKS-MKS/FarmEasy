const express = require("express");
const {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviews");

const Review = require("../models/Review");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(advancedResults(Review), getReviews)
  .post(protect, addReview);

router
  .route("/:id")
  // .get(getReview)
  // .put(protect, updateReview)
  .delete(protect, deleteReview);

module.exports = router;
