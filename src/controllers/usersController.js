const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../../validation/login");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  const { name, email, password } = req.body;

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    // If the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "Email already exists"});
    }

    // Create new user
    user = new User({
      name,
      email,
      password
    });

    // Hash user password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    console.log(user);

    // Return jwt
    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    };
    console.log(payload);

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5 minutes'},
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
