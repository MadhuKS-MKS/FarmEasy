const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
// const geocoder = require("../utils/geocoder");
const Public = require("../models/Public");

// @desc      Get all public
// @route     GET /api/v1/public
// @access    Public
exports.getPublics = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get single public
// @route     GET /api/v1/public/:id
// @access    Public
exports.getPublic = asyncHandler(async (req, res, next) => {
  const public = await Public.find({ user: req.user.id });

  if (!public) {
    return next(
      new ErrorResponse(
        `Public not found with id of ${req.params.publicId}`,
        404
      )
    );
  }

  res.status(200).json({ success: true, data: public });
});

// @desc      Create new public
// @route     POST /api/v1/public
// @access    Private
exports.createPublic = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;

  // Check for published public
  const publishPublic = await Public.findOne({ user: req.user.id });

  // If the user is not an admin, they can only add one public
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

// @desc      Update public
// @route     PUT /api/v1/public/:id
// @access    Private
exports.updatePublic = asyncHandler(async (req, res, next) => {
  const public = await Public.findById(req.params.publicId);

  if (!public) {
    return next(
      new ErrorResponse(
        `Public not found with id of ${req.params.publicId}`,
        404
      )
    );
  }

  // Make sure user is public owner
  if (public.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this public`,
        401
      )
    );
  }

  publics = await Public.findByIdAndUpdate(req.params.publicId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: publics });
});

// @desc      Delete public
// @route     DELETE /api/v1/public/:publicId
// @access    Private
exports.deletePublic = asyncHandler(async (req, res, next) => {
  const public = await Vendor.find({ user: req.params.publicId });

  if (!public) {
    return next(
      new ErrorResponse(
        `Vendor not found with id of ${req.params.publicId}`,
        404
      )
    );
  }

  // Make sure user is public owner
  if (public.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.publicId} is not authorized to delete this public`,
        401
      )
    );
  }

  public.remove();

  res.status(200).json({ success: true, data: {} });
});

// @desc      Upload photo for public
// @route     PUT /api/v1/public/:publicId/photo
// @access    Private
exports.publicPhotoUpload = asyncHandler(async (req, res, next) => {
  const public = await Public.findById(req.params.publicId);

  if (!public) {
    return next(
      new ErrorResponse(`public not found with id of ${req.params.id}`, 404)
    );
  }

  // // Make sure user is public owner
  if (public.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this public`,
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

  file.mv(
    `${__dirname}/../../my-app/public/uploads/profile/${file.name}`,
    async (err) => {
      if (err) {
        console.error(err);
        return next(new ErrorResponse(`Problem with file upload`, 500));
      }

      const files = `/uploads/profile/${file.name}`;
      await Public.findByIdAndUpdate(req.params.id, { photo: files });
      res.status(200).json({
        success: true,
        data: files,
      });
    }
  );
  // if (!req.files) {
  //   return next(new ErrorResponse(`Please upload a file`, 400));
  // }

  // const file = req.files.file;

  // // Make sure the image is a photo
  // if (!file.mimetype.startsWith("image")) {
  //   return next(new ErrorResponse(`Please upload an image file`, 400));
  // }

  // // Check filesize
  // if (file.size > process.env.MAX_FILE_UPLOAD) {
  //   return next(
  //     new ErrorResponse(
  //       `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
  //       400
  //     )
  //   );
  // }

  // // Create custom filename
  // file.name = `photo_${public._id}${path.parse(file.name).ext}`;

  // file.mv(`${process.env.FILE_UPLOAD_PATH_2}/${file.name}`, async (err) => {
  //   if (err) {
  //     console.error(err);
  //     return next(new ErrorResponse(`Problem with file upload`, 500));
  //   }

  //   res.status(200).json({
  //     success: true,
  //     data: file.name,
  //   });
  // });
});
