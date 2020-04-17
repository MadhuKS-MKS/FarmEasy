const path = require("path");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Orders = require("../models/Orderlist");
const Products = require("../models/Products");
const Public = require("../models/Public");

// @desc      Get pending list
// @route     GET /api/v1/public/:publicid/orderlist
// @access    Public
exports.getOrders = asyncHandler(async (req, res, next) => {
  if (req.params.publicId) {
    const orders = await Orders.find({ public: req.params.publicId });
    if (orders.status == "pending") {
      return res.status(200).json({
        success: true,
        count: orders.length,
        data: orders,
      });
    } else {
      return res.status(200).json({
        success: false,
        count: orders.length,
        data: orders,
      });
    }
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get orderd list
// @route     /api/v1/public/cart/orders/
// @access    Public
exports.getPlacedOrders = asyncHandler(async (req, res, next) => {
  const order = await Orders.find({ status: "orderd" }).populate({
    path: "public",
    select: "name location email phone ",
  });
  // const orders = await Orders.find({ user: req.user.id });
  if (order.status == "orderd") {
    return res.status(200).json({
      success: true,
      count: order.length,
      data: order,
    });
  } else {
    return res.status(200).json({
      success: false,
      count: order.length,
      data: order,
    });
  }
});
// @desc      Get orderd list
// @route     /api/v1/public/cart/pending/
// @access    Public
exports.getPendingOrders = asyncHandler(async (req, res, next) => {
  const order = await Orders.find({ status: "pending" }).populate({
    path: "public",
    select: "name location email phone ",
  });

  if (order.status == "pending") {
    return res.status(200).json({
      success: true,
      count: order.length,
      data: order,
    });
  } else {
    return res.status(200).json({
      success: false,
      count: order.length,
      data: order,
    });
  }
});

// @desc      Get orderd list
// @route     /api/v1/orders/orderd/
// @access    Public
exports.getOrderdOrders = asyncHandler(async (req, res, next) => {
  const order = await Orders.find({ status: "ordered" }).populate({
    path: "public",
    select: "name location email phone ",
  });

  if (order.status == "pending") {
    return res.status(200).json({
      success: true,
      count: order.length,
      data: order,
    });
  } else {
    return res.status(200).json({
      success: false,
      count: order.length,
      data: order,
    });
  }
});
// @desc      Add Cart
// @route     POST /api/v1/public/:publicId/cart
// @access    Private
exports.addCart = asyncHandler(async (req, res, next) => {
  // req.params
  //  req.user.id;
  req.body.user = req.user.id;

  const publics = await Public.findOne({ user: req.user.id });
  if (!publics) {
    return next(
      new ErrorResponse(`No Public with the id of ${req.user.id}`),
      404
    );
  }
  const product = await Products.findById(req.body._id);
  const { photo, title, rate, stock } = product;
  const public = publics.id;

  // Make sure user is public owner
  if (publics.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to order by ${publics._id}`,
        401
      )
    );
  }
  if (stock > 0) {
    const cart = {
      title,
      rate,
      qty: "1",
      photo,
      status: "pending",
      public,
      user: publics.user,
    };
    const orders = await Orders.create(cart);
    res.status(200).json({
      success: true,
      data: orders,
    });
  } else {
    res.redirect("/");
  }
});

// @desc      Update order
// @route     PUT /api/v1/public/cart/orders/:orderId
// @access    Private
exports.placeOrder = asyncHandler(async (req, res, next) => {
  let order = await Orders.findById(req.params.orderId);

  if (!order) {
    return next(
      new ErrorResponse(`No Product with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is product owner
  if (order.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update product ${order._id}`,
        401
      )
    );
  }

  order = await Orders.findByIdAndUpdate(
    req.params.orderId,
    { status: "orderd" },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: order,
  });
});

// @desc      Delete cart
// @route     DELETE /api/v1/cart/orders/:orderId
// @access    Private
exports.deleteCart = asyncHandler(async (req, res, next) => {
  const order = await Orders.findById(req.params.orderId);

  if (!order) {
    return next(
      new ErrorResponse(`No Order with the id of ${req.params.orderId}`),
      404
    );
  }

  // Make sure user is order owner
  if (order.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete product ${order._id}`,
        401
      )
    );
  }

  await order.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
