const path = require("path");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Orders = require("../models/Orderlist");
const Products = require("../models/Products");
const Public = require("../models/Public");

// @desc      Get Order
// @route     GET /api/v1/order
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

// @desc      Get single course
// @route     GET /api/v1/courses/:id
// @access    Public
// exports.getOrder = asyncHandler(async (req, res, next) => {
//   const order = await Orders.findById(req.params.orderId);
//   //         .populate({
//   //     path: "public",
//   //     select: "name",
//   //   });

//   if (!order) {
//     return next(
//       new ErrorResponse(`No product with the id of ${req.params.id}`),
//       404
//     );
//   }

//   res.status(200).json({
//     success: true,
//     data: order,
//   });
// });

// @desc      Add Cart
// @route     POST /api/v1/public/:publicId/cart
// @access    Private
exports.addCart = asyncHandler(async (req, res, next) => {
  // req.params
  //  req.user.id;

  const publics = await Public.findById(req.params.publicId);
  const product = await Products.findById(req.body._id);
  const { photo, title, rate, stock } = product;
  const public = req.params.publicId;
  if (!publics) {
    return next(
      new ErrorResponse(`No Public with the id of ${req.params.publicId}`),
      404
    );
  }

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

// @desc      Update course
// @route     PUT /api/v1/courses/:id
// @access    Private
// exports.updateOrder = asyncHandler(async (req, res, next) => {
//   let orders = await Orders.findById(req.params.orderId);

//   if (!orders) {
//     return next(
//       new ErrorResponse(`No Product with the id of ${req.params.id}`),
//       404
//     );
//   }

//   // Make sure user is course owner
//   if (product.user.toString() !== req.user.id && req.user.role !== "admin") {
//     return next(
//       new ErrorResponse(
//         `User ${req.user.id} is not authorized to update product ${product._id}`,
//         401
//       )
//     );
//   }

//   orders = await Orders.findByIdAndUpdate(req.params.orderId, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(200).json({
//     success: true,
//     data: product,
//   });
// });

// @desc      Delete course
// @route     DELETE /api/v1/courses/:id
// @access    Private
exports.deleteCart = asyncHandler(async (req, res, next) => {
  const order = await Orders.findById(req.params.orderId);

  // if (!order) {
  //   return next(
  //     new ErrorResponse(`No Order with the id of ${req.params.orderId}`),
  //     404
  //   );
  // }

  // Make sure user is order owner
  // if (order.user.toString() !== req.user.id && req.user.role !== "admin") {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.user.id} is not authorized to delete product ${order._id}`,
  //       401
  //     )
  //   );
  // }

  await order.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
