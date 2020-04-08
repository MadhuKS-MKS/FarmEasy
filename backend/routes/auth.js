const express = require("express");
const {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", protect, getMe);
router.put("/updatedetails", protect, updateDetails);
router.put("/updatepassword", protect, updatePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const config = require("config");
// const auth = require("../middleware/auth");
// const { check, validationResult } = require("express-validator");

// const User = require("../models/Users");
// const Vendor = require("../models/Vendor");

// // @route     GET api/auth
// // @desc      Get logged in user
// // @access    Private
// router.get("/user", auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// // @route     POST api/auth
// // @desc      Auth user & get token
// // @access    Public
// router.post(
//   "/user/login",
//   [
//     check("email", "Please include a valid email").isEmail(),
//     check("password", "Password is required").exists()
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       let user = await User.findOne({ email });

//       if (!user) {
//         return res.status(400).json({ msg: "Invalid Credentials" });
//       }

//       const isMatch = await bcrypt.compare(password, user.password);

//       if (!isMatch) {
//         return res.status(400).json({ msg: "Invalid Credentials" });
//       }

//       const payload = {
//         user: {
//           id: user.id
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

// // @route     GET api/auth
// // @desc      Get logged in vendors
// // @access    Private
// router.get("/vendors", auth, async (req, res) => {
//   try {
//     const user = await Vendor.findById(req.user.id).select("-password");
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// // @route     POST api/auth
// // @desc      Auth Vendor & get token
// // @access    Public
// router.post(
//   "/vendors/login",
//   [
//     check("email", "Please include a valid email").isEmail(),
//     check("password", "Password is required").exists()
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       let user = await Vendor.findOne({ email });

//       if (!user) {
//         return res.status(400).json({ msg: "Invalid Credentials" });
//       }

//       const isMatch = await bcrypt.compare(password, user.password);

//       if (!isMatch) {
//         return res.status(400).json({ msg: "Invalid Credentials" });
//       }

//       const payload = {
//         user: {
//           id: user.id
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
