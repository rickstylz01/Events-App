const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ 'message': 'No users found' });
  res.json(users);
};

const updateUser = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({'message': 'ID parameter is required'});
  }

  const user = await User.findOne({ _id: req.body.id }).exec();
  if (!user) {
    return res.status(204).json({'message': `No user matches ${req.body.id}.`})
  }
  if (req.body?.username) user.username = req.body.username;
  if (req.body?.email) user.email = req.body.email;
  if (req.body?.password) user.password = req.body.password;
  const result = await user.save();
  res.json(result);
};

const deleteUser = async (req, res) => {
  if (!req?.body?.id) return res.status(400).json({ "message": 'User ID required' });
  const user = await User.findOne({ _id: req.body.id }).exec()
  if (!user) {
    return res.status(204).json({ 'message': `User ID ${req.body.id} not found`});
  }
  const result = await user.deleteOne({ _id: req.body.id });
  res.json(result);
};

const getUser = async (req, res) => {
  if (!req.params?.id) return res.status(400).json({ 'message': 'User ID required' });
  const user = await User.findOne({ _id: req.params.id }).exec();
  if (!user) {
    return res.status(204).json({ 'message': `User ID ${req.body.id} not found` });
  }
}

module.exports = {
  getAllUsers,
  getUser,
  deleteUser
}
