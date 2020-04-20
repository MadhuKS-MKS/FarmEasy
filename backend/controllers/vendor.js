const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const geocoder = require("../utils/geocoder");
const Vendor = require("../models/Vendor");

// @desc      Get all vendors
// @route     GET /api/v1/vendors
// @access    Public
exports.getVendors = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get single vendor
// @route     GET /api/v1/vendors/:vendorId
// @access    Public
exports.getVendor = asyncHandler(async (req, res, next) => {
  const vendor = await Vendor.findById(req.params.vendorId);

  if (!vendor) {
    return next(
      new ErrorResponse(
        `Vendor not found with id of ${req.params.vendorId}`,
        404
      )
    );
  }

  res.status(200).json({ success: true, data: vendor });
});

// @desc      Create new vendor
// @route     POST /api/v1/vendors
// @access    Private
exports.createVendor = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;

  // Check for published vendor
  const publishedvendor = await Vendor.findOne({ user: req.user.id });

  // If the user is not an admin, they can only add one vendor
  if (publishedvendor && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} has already  a vendor`,
        400
      )
    );
  }

  const vendor = await Vendor.create(req.body);

  res.status(201).json({
    success: true,
    data: vendor,
  });
});

// @desc      Update vendor
// @route     PUT /api/v1/vendor/:vendorId
// @access    Private
exports.updateVendor = asyncHandler(async (req, res, next) => {
  let vendor = await Vendor.findById(req.params.vendorId);

  if (!vendor) {
    return next(
      new ErrorResponse(
        `Vendor not found with id of ${req.params.vendorId}`,
        404
      )
    );
  }

  // Make sure user is vendor owner
  if (vendor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.vendorId} is not authorized to update this vendor`,
        401
      )
    );
  }

  vendor = await Vendor.findByIdAndUpdate(req.params.vendorId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: vendor });
});

// @desc      Delete vendor
// @route     DELETE /api/v1/vendor/:vendorId
// @access    Private
exports.deleteVendor = asyncHandler(async (req, res, next) => {
  const vendor = await Vendor.findById(req.params.vendorId);

  if (!vendor) {
    return next(
      new ErrorResponse(
        `Vendor not found with id of ${req.params.vendorId}`,
        404
      )
    );
  }

  // Make sure user is vendor owner
  if (vendor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.vendorId} is not authorized to delete this vendor`,
        401
      )
    );
  }

  vendor.remove();

  res.status(200).json({ success: true, data: {} });
});

// @desc      Upload photo for vendor
// @route     PUT /api/v1/vendor/:vendorId/photo
// @access    Private
exports.vendorsPhotoUpload = asyncHandler(async (req, res, next) => {
  const vendor = await Vendor.findById(req.params.vendorId);

  if (!vendor) {
    return next(
      new ErrorResponse(
        `Vendor not found with id of ${req.params.vendorId}`,
        404
      )
    );
  }

  // Make sure user is vendor owner
  if (vendor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.vendorId} is not authorized to update this product`,
        401
      )
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  // Create custom filename
  file.name = `photo_${vendor._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Vendor.findByIdAndUpdate(req.params.vendorId, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
