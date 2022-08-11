const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, date } = req.body;
  if (!email || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

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
      password,
      "roles": { "User": 2001 },
      date
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
        role: user.roles,
        date: user.date
      }
    };
    console.log(payload);

    jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET,
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
    if (!user) return res.sendStatus(401);

    // Check if the encrypted password matches
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const roles = Object.values(user.roles)
      // create JWTs
      const accessToken = jwt.sign(
        {
          "UserInfo": {
            "name": user.name,
            "roles": roles
          }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '40s'}
      );
      const refreshToken = jwt.sign(
        {
          user: {
            "name": user.name
          }
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1 minute'}
      );

      // Saving refresh token with current user


      // Storing refresh token cookie as httpOnly
      res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
      res.json({ accessToken });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.retrieve = async (req, res) => {
  try {
    const user = await User.findOne(req.email)
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json(err);
  }
};
