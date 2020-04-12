const express = require("express");

const router = express.Router();

const { check, validationResult } = require("express-validator");
const {
  getCategories,
  addCategory,
  deleteCategory,
  getCategoryProduct,
} = require("../controllers/category");
const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

const Category = require("../models/Category");

router
  .route("/")
  .get(advancedResults(Category), getCategories)
  .post(protect, authorize("admin"), addCategory);

router
  .route("/:categoryId")
  .get(getCategoryProduct)
  .delete(protect, authorize("admin"), deleteCategory);

router.route("/:categoryId/products").get(getCategoryProduct);

module.exports = router;
