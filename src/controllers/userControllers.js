const User = require("../models/User");

exports.retrieve = async (req, res) => {
  try {
    const user = await User.findOne(req.email)
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json(err);
  }
};
