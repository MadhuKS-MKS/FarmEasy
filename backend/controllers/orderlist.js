const path = require("path");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Orders = require("../models/Orderlist");
const Public = require("../models/Public");

// @desc      Get Order
// @route     GET /api/v1/order
// @route     GET /api/v1/public/:publicid/orderlist
// @access    Public
exports.getOrders = asyncHandler(async (req, res, next) => {
  if (req.params.publicId) {
    const orders = await Orders.find({ public: req.params.publicId });

    return res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single course
// @route     GET /api/v1/courses/:id
// @access    Public
exports.getOrder = asyncHandler(async (req, res, next) => {
  const order = await Orders.findById(req.params.id);
  //         .populate({
  //     path: "public",
  //     select: "name",
  //   });

  if (!order) {
    return next(
      new ErrorResponse(`No product with the id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: order,
  });
});

// @desc      Add course
// @route     POST /api/v1/bootcamps/:bootcampId/courses
// @access    Private
exports.addOrder = asyncHandler(async (req, res, next) => {
  req.body.public = req.params.publicId;
  req.body.user = req.user.id;

  const public = await Public.findById(req.params.publicId);

  if (!public) {
    return next(
      new ErrorResponse(`No vendor with the id of ${req.params.publicId}`),
      404
    );
  }

  // Make sure user is bootcamp owner
  if (public.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to order by ${public._id}`,
        401
      )
    );
  }

  const order = await Orders.create(req.body);

  res.status(200).json({
    success: true,
    data: order,
  });
});

// @desc      Update course
// @route     PUT /api/v1/courses/:id
// @access    Private
exports.updateOrder = asyncHandler(async (req, res, next) => {
  let orders = await Orders.findById(req.params.id);

  if (!orders) {
    return next(
      new ErrorResponse(`No Product with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is course owner
  if (product.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update product ${product._id}`,
        401
      )
    );
  }

  product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: product,
  });
});

// @desc      Delete course
// @route     DELETE /api/v1/courses/:id
// @access    Private
exports.deleteOrder = asyncHandler(async (req, res, next) => {
  const order = await Orders.findById(req.params.id);

  if (!order) {
    return next(
      new ErrorResponse(`No Order with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is course owner
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
