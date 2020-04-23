const express = require("express");
const {
  getVendors,
  getVendor,
  createVendor,
  updateVendor,
  deleteVendor,
  // getVendorsInRadius,
  vendorsPhotoUpload,
} = require("../controllers/vendor");

const Vendor = require("../models/Vendor");

// Include other resource routers
const ProductsRouter = require("./products");
const reviewRouter = require("./reviews");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers
router.use("/products", ProductsRouter);
router.use("/:vendorId/reviews", reviewRouter);

// router.route("/radius/:zipcode/:distance").get(getVendorsInRadius);

router.route("/:vendorId/photo").put(protect, vendorsPhotoUpload);

router
  .route("/")
  .get(advancedResults(Vendor, "Products"), getVendors)
  .post(protect, createVendor);

router
  .route("/:vendorId")
  .get(getVendor)
  .put(protect, updateVendor)
  .delete(protect, deleteVendor);

module.exports = router;
