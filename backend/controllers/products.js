const path = require("path");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Products = require("../models/Products");
const Vendor = require("../models/Vendor");

// @desc      Get courses
// @route     GET /api/v1/courses
// @route     GET /api/v1/bootcamps/:bootcampId/courses
// @access    Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  if (req.params.vendorId) {
    const products = await Products.find({ vendor: req.params.vendorId });

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single course
// @route     GET /api/v1/courses/:id
// @access    Public
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Products.findById(req.params.id).populate({
    path: "vendor",
    select: "name description",
  });

  if (!product) {
    return next(
      new ErrorResponse(`No product with the id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

// @desc      Add course
// @route     POST /api/v1/bootcamps/:bootcampId/courses
// @access    Private
exports.addProduct = asyncHandler(async (req, res, next) => {
  req.body.vendor = req.params.vendorId;
  req.body.user = req.user.id;

  const vendor = await Vendor.findById(req.params.vendorId);

  if (!vendor) {
    return next(
      new ErrorResponse(`No vendor with the id of ${req.params.vendorId}`),
      404
    );
  }

  // Make sure user is bootcamp owner
  if (vendor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to add a product by ${vendor._id}`,
        401
      )
    );
  }

  const product = await Products.create(req.body);

  res.status(200).json({
    success: true,
    data: product,
  });
});

// @desc      Update course
// @route     PUT /api/v1/courses/:id
// @access    Private
exports.updateProduct = asyncHandler(async (req, res, next) => {
  let product = await Products.findById(req.params.id);

  if (!product) {
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
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Products.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`No Product with the id of ${req.params.id}`),
      404
    );
  }

  // Make sure user is course owner
  if (product.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete product ${product._id}`,
        401
      )
    );
  }

  await product.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      Upload photo for bootcamp
// @route     PUT /api/v1/bootcamps/:id/photo
// @access    Private
exports.productPhotoUpload = asyncHandler(async (req, res, next) => {
  const product = await Products.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(`Products not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure user is bootcamp owner
  if (product.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this product`,
        401
      )
    );
  }

  // if (!req.files) {
  //   return next(new ErrorResponse(`Please upload a file`, 400));
  // }

  // const file = req.files.files;
  // if (req.files) {
  //   const file = req.files.filename;
  //   for (var i = 0; i < 2; i++) {
  //     file[i].mv(
  //       `${process.env.FILE_UPLOAD_PATH_ITEMS}/${file[i].name}`,
  //       async (err) => {
  //         if (err) {
  //           res.send(err);
  //         }
  //       }
  //     );
  //     console.log(file[i]);
  //   }
  //   res.send("files uploaded");
  // }
  // Make sure the image is a photo
  // if (!file.mimetype.startsWith("image")) {
  //   return next(new ErrorResponse(`Please upload an image file`, 400));
  // }

  // Check filesize
  // if (file.size > process.env.MAX_FILE_UPLOAD) {
  //   return next(
  //     new ErrorResponse(
  //       `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
  //       400
  //     )
  //   );
  // }

  // Create custom filename
  // file.name = `photo_${Date.now() + file.name.ext}`;

  // file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
  //   if (err) {
  //     console.error(err);
  //     return next(new ErrorResponse(`Problem with file upload`, 500));
  //   }

  //   await Products.findByIdAndUpdate(req.params.id, { photo: file.name });

  //   res.status(200).json({
  //     success: true,
  //     data: file.name,
  //   });
  // });
});
