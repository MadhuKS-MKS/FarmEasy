const express = require("express");

const {
  getOrders,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
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
  .post(protect, authorize("public", "admin"), addOrder);

router
  .route("/:id")
  .get(getOrder)
  .put(protect, authorize("public", "admin"), updateOrder)
  .delete(protect, authorize("public", "admin"), deleteOrder);

module.exports = router;