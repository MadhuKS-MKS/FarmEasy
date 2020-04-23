const express = require("express");
const {
  getPublics,
  getPublic,
  createPublic,
  updatePublic,
  deletePublic,
  // getVendorsInRadius,
  publicPhotoUpload,
} = require("../controllers/public");

const Public = require("../models/Public");

// Include other resource routers
const cartRouter = require("./orderlist");
// const reviewRouter = require("./reviews");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers
router.use("/cart", cartRouter);
// router.use("/:publicId/reviews", reviewRouter);

// router.route("/radius/:zipcode/:distance").get(getVendorsInRadius);

router.route("/:publicId/photo").put(protect, publicPhotoUpload);

router
  .route("/")
  .get(advancedResults(Public), getPublics)
  .post(protect, createPublic);

router
  .route("/:publicId")
  .get(protect, getPublic)
  .put(protect, updatePublic)
  .delete(protect, deletePublic);

module.exports = router;
