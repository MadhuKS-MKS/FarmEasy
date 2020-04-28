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

router
  .route("/")
  .get(
    advancedResults(Orders, {
      path: "product",
      select: "title price qty photo ",
    }),
    getOrders
  )
  .post(protect, addCart);

router.route("/orders").get(getPlacedOrders);
// router.route("/orders/:id").get(getOrderdOrders);
// router.route("/pending").get(protect, getPendingOrders);

router.route("/orders/order").put(protect, placeOrder);
router.route("/orders/:orderId").put(protect, placeOrderSingle);

router
  .route("/:orderId")
  // .post(protect, authorize("public", "admin"), addOrder)
  // .put(protect, authorize("public", "admin"), updateOrder)
  .delete(protect, deleteCart);
router.route("/vendor").get(protect, getVendorOrders);

module.exports = router;
