const express = require("express");

const {
  getOrders,
  getOrder,
  addCart,
  updateOrder,
  deleteCart,
} = require("../controllers/orderlist");

const Orders = require("../models/Orderlist");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(Orders, {
      path: "public",
      select: "title price qty photo",
    }),
    getOrders
  )
  .post(protect, authorize("user", "admin"), addCart);

router
  .route("/:orderId")
  // .post(protect, authorize("public", "admin"), addOrder)
  // .put(protect, authorize("public", "admin"), updateOrder)
  .delete(protect, authorize("user", "admin"), deleteCart);

module.exports = router;
