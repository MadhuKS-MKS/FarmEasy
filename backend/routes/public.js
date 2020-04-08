const express = require("express");
const {
  getPublics,
  getPublic,
  createPublic,
  updatePublic,
  deletePublic,
  // getVendorsInRadius,
  publicPhotoUpload,
} = require("../controllers/public");

const Public = require("../models/Public");

// Include other resource routers
const ProductsRouter = require("./products");
const reviewRouter = require("./reviews");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers
router.use("/:publicId/products", ProductsRouter);
router.use("/:PublicId/reviews", reviewRouter);

// router.route("/radius/:zipcode/:distance").get(getVendorsInRadius);

router
  .route("/:id/photo")
  .put(protect, authorize("user", "admin"), publicPhotoUpload);

router
  .route("/")
  .get(advancedResults(Public, "Products"), getPublics)
  .post(protect, authorize("user", "admin"), createPublic);

router
  .route("/:id")
  .get(getPublic)
  .put(protect, authorize("user", "admin"), updatePublic)
  .delete(protect, authorize("user", "admin"), deletePublic);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const config = require("config");
// const { check, validationResult } = require("express-validator");

// const Vendor = require("../models/Vendor");

// // @route     POST api/users
// // @desc      Regiter a user
// // @access    Public
// router.post(
//   "/",
//   [
//     check("name", "Please add name")
//       .not()
//       .isEmpty(),
//     check("email", "Please include a valid email").isEmail(),
//     check(
//       "password",
//       "Please enter a password with 6 or more characters"
//     ).isLength({ min: 6 })
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { name, email, password } = req.body;

//     try {
//       let vendor = await Vendor.findOne({ email });

//       if (vendor) {
//         return res.status(400).json({ msg: "User already exists" });
//       }

//       vendor = new Vendor({
//         name,
//         email,
//         password
//       });

//       const salt = await bcrypt.genSalt(10);

//       vendor.password = await bcrypt.hash(password, salt);

//       await vendor.save();

//       const payload = {
//         vendor: {
//           id: vendor.id
//         }
//       };

//       jwt.sign(
//         payload,
//         config.get("jwtSecret"),
//         {
//           expiresIn: 360000
//         },
//         (err, token) => {
//           if (err) throw err;
//           res.json({ token });
//         }
//       );
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );

// module.exports = router;
