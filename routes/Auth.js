const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {reponse} = require("../utils/ResponseHandlers");
const response = require("../utils/ResponseHandlers");

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, contact } = req.body; // getting user data
    const checkUserExists = await User.findOne({email: email}); // checking if user already exists
    if (checkUserExists) {
      return response(res, 200, "User already exists", null);
    }
    const salt = await bcrypt.genSalt(10); // generating salt
    const user = new User({
      firstName,
      lastName,
      email,
      password: await bcrypt.hash(password, salt), // hashing password
      contact,
    });
    await user.save();
    response(res, 200, "User registered successfully", {firstName, lastName, email, contact});
  } catch (error) {
    response(res, 500, "Internal server error", {error: error.message});
  }
});


module.exports = router;