const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
// const geocoder = require("../utils/geocoder");
const Public = require("../models/Public");

// @desc      Get all bootcamps
// @route     GET /api/v1/public
// @access    Public
exports.getPublics = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get single bootcamp
// @route     GET /api/v1/vendors/:id
// @access    Public
exports.getPublic = asyncHandler(async (req, res, next) => {
  const vendor = await Public.findById(req.params.id);

  if (!vendor) {
    return next(
      new ErrorResponse(`Vendor not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: vendor });
});

// @desc      Create new bootcamp
// @route     POST /api/v1/vrndors
// @access    Private
exports.createPublic = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;

  // Check for published vendor
  const publishPublic = await Public.findOne({ user: req.user.id });

  // If the user is not an admin, they can only add one bootcamp
  if (publishPublic && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} has already  a Public`,
        400
      )
    );
  }

  const public = await Public.create(req.body);

  res.status(201).json({
    success: true,
    data: public,
  });
});

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updatePublic = asyncHandler(async (req, res, next) => {
  let public = await Public.findById(req.params.id);

  if (!public) {
    return next(
      new ErrorResponse(`Vendor not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure user is bootcamp owner
  if (public.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this public`,
        401
      )
    );
  }

  public = await Public.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: public });
});

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deletePublic = asyncHandler(async (req, res, next) => {
  const public = await Vendor.findById(req.params.id);

  if (!public) {
    return next(
      new ErrorResponse(`Vendor not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure user is bootcamp owner
  if (public.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to delete this public`,
        401
      )
    );
  }

  public.remove();

  res.status(200).json({ success: true, data: {} });
});

// @desc      Get bootcamps within a radius
// @route     GET /api/v1/bootcamps/radius/:zipcode/:distance
// @access    Private
exports.getPublicInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;

  // Get lat/lng from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[0].longitude;

  // Calc radius using radians
  // Divide dist by radius of Earth
  // Earth Radius = 3,963 mi / 6,378 km
  const radius = distance / 3963;

  const public = await Public.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    success: true,
    count: public.length,
    data: public,
  });
});

// @desc      Upload photo for bootcamp
// @route     PUT /api/v1/bootcamps/:id/photo
// @access    Private
exports.publicPhotoUpload = asyncHandler(async (req, res, next) => {
  const public = await Public.findById(req.params.id);

  if (!public) {
    return next(
      new ErrorResponse(`Vendor not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure user is bootcamp owner
  if (public.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this bootcamp`,
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
  file.name = `photo_${public._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH_2}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }

    await Public.findByIdAndUpdate(req.params.id, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name,
    });
  });
});
