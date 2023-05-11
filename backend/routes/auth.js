const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')

const JWT_SECRET = 'Shivamwilllove@69$'

// Create a user using: POST "/api/auth/createuser". Doesn't require Auth
router.post(
  "/createuser",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      // console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists." });
      }
      const salt = await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        }
      }

      const authToken = jwt.sign(data, JWT_SECRET)
      // console.log(authToken)
      // .then((user) => res.json(user))
      // .catch((err) => {
      //   console.log(err);
      //   res.json({ error: "Please enter a unique email!" });
      // });
      // res.json(user);
      res.json({authToken})
    } catch (error) {
      console.error(error.message)
      res.status(500).send("Some Error occured!")
    }
  }
);

module.exports = router;
