const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

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

    // Return jwt
    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'No registered email found'});
    }

    // Check if the encrypted password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Email or password incorrect' });
    }

    // Return jwt
    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    };
    console.log(`payload: `, payload);

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '10 minutes'},
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.retrieve = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json(err);
  }
};
