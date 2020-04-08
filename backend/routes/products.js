const express = require("express");

const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  productPhotoUpload,
} = require("../controllers/products");

const Product = require("../models/Products");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/:id/photo")
  .put(protect, authorize("vendor", "admin"), productPhotoUpload);

router
  .route("/")
  .get(
    advancedResults(Product, {
      path: "vendor",
      select: "name description",
    }),
    getProducts
  )
  .post(protect, authorize("vendor", "admin"), addProduct);

router
  .route("/:id")
  .get(getProduct)
  .put(protect, authorize("vendor", "admin"), updateProduct)
  .delete(protect, authorize("vendor", "admin"), deleteProduct);

module.exports = router;
