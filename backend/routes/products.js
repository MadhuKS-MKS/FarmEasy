const express = require("express");

const {
  getProducts,
  getProduct,
  getCategoryProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  productPhotoUpload,
} = require("../controllers/products");
const reviewRouter = require("./reviews");

const Product = require("../models/Products");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");
router.use("/:productId/reviews", reviewRouter);

router
  .route("/:productId/photo")
  .put(protect, authorize("vendor", "admin"), productPhotoUpload);

router
  .route("/")
  .get(
    advancedResults(Product, {
      path: "category",
      select: "catname",
    }),
    getProducts
  )
  .post(protect, authorize("vendor", "admin"), addProduct);

router
  .route("/:productId")
  .get(getProduct)
  .put(protect, authorize("vendor", "admin"), updateProduct)
  .delete(protect, authorize("vendor", "admin"), deleteProduct);

module.exports = router;
