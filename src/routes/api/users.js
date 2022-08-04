const express = require("express");
const router = express.Router();
const User = require('../../controllers/userControllers');
const auth = require('../../middleware/auth');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', User.register);

// @route POST api/users/login
// @desc Login user
// @access Public
router.post('/login', User.login);

// @route GET api/user/info
// @desc GET user info
// @access Public
router.get('/user/info', auth, User.retrieve);

module.exports = router;
