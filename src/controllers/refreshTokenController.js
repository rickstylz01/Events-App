const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  console.log(cookies.jwt);
  const refreshToken = cookies.jwt;

  // find user by the refresh token
  const foundUser = User.find(refreshToken);
  if (!foundUser) return res.sendStatus(403);

  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err || foundUser.email) return res.sendStatus(403);
      const accessToken = jwt.sign(
        {"email": decoded.email},
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '40s'}
      );
      res.json({ accessToken })
    }
  );
}

module.exports = { handleRefreshToken }
