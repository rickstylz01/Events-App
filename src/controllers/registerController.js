const User = require("../models/User");
const bcrypt = require("bcryptjs");

const handleNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

  const duplicate = await User.findOne({ email }).exec();
  if (duplicate) return res.sendStatus(409);

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    //create and store the new user
    const result = await User.create({
      "name": name,
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
