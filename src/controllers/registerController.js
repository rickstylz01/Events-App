const User = require("../models/User");
const bcrypt = require("bcryptjs");

const handleNewUser = async (req, res) => {
  const { user, email, pwd } = req.body;
  if (!email || !pwd || !user) return res.status(400).json({ 'message': 'Username, email, and password are required.' });

  const duplicate = await User.findOne({ email }).exec();

  if (duplicate) return res.sendStatus(409);

  try {
    //encrypt the pwd
    const hashedPwd = await bcrypt.hash(pwd, 10);

    //create and store the new user
    const result = await User.create({
      "username": user,
      "email": email,
      "password": hashedPwd
    });

    console.log(result);
    res.status(201).json({ 'success': `New user ${email} created!`});
  } catch (err) {
    res.status(500).json({ 'message': err.message });
  }
};

module.exports = { handleNewUser };
