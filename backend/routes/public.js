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

router
  .route("/:publicId/photo")
  .put(protect, authorize("user", "admin"), publicPhotoUpload);

router
  .route("/")
  .get(advancedResults(Public, "Products"), getPublics)
  .post(protect, authorize("user", "admin"), createPublic);

router
  .route("/:publicId")
  .get(getPublic)
  .put(protect, authorize("user", "admin"), updatePublic)
  .delete(protect, authorize("user", "admin"), deletePublic);

module.exports = router;
