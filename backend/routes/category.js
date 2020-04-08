const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const Category = require("../models/Category");

// @route     GET api/category
// @desc      Get all category
// @access    Private
router.get("/all", async (req, res) => {
  try {
    const category = await Category.find();
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/contacts
// @desc      Add new product
// @access    Private
router.post(
  "/",
  [
    auth,
    [
      check("catname", "Please add type")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { catname } = req.body;

    try {
      const newcategory = new Category({
        catname
      });

      const category = await newcategory.save();

      res.json(category);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route     DELETE api/contacts/:id
// @desc      Delete Product
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);

    // if (!category) return res.status(404).json({ msg: "Item not found" });

    // // Make sure vendor owns product

    await Category.findByIdAndRemove(req.params.id);

    res.json({ msg: "Category removed" });
    res.json(category.user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
