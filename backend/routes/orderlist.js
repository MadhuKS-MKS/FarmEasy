const express = require("express");

const {
  getOrders,
  getPlacedOrders,
  addCart,
  placeOrder,
  placeOrderSingle,
  getVendorOrders,
  deleteCart,
  // getPendingOrders,
  getOrderdOrders,
} = require("../controllers/orderlist");

const Orders = require("../models/Orderlist");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router.route("/").get(protect, getOrders).post(protect, addCart);

router.route("/orders").put(protect, placeOrder);
router.route("/:orderId").put(protect, placeOrderSingle);

router.route("/:orderId").delete(protect, deleteCart);
router.route("/vendor").get(protect, getVendorOrders);

module.exports = router;
