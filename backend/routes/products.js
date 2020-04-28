const express = require("express");

const {
  getProducts,
  getProduct,
  getProductsVendor,
  getCategoryProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  productPhotoUpload,
  getVendorOrders,
} = require("../controllers/products");
const reviewRouter = require("./reviews");

const Product = require("../models/Products");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect } = require("../middleware/auth");
router.use("/:productId/reviews", reviewRouter);

router.route("/photo").post(protect, productPhotoUpload);

router
  .route("/")
  .get(
    advancedResults(Product, {
      path: "category",
      select: "catname",
    }),
    getProducts
  )
  .post(protect, addProduct);

router.route("/product/:id").get(protect, getProductsVendor);
router
  .route("/:productId")
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);
// router.route("/order").get(protect, getVendorOrders);
module.exports = router;
