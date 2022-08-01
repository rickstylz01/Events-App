const express = require("express");
const router = express.Router();
const UserController = require('../../controllers/usersController');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', UserController.register);

// @route POST api/users/login
// @desc Login user
// @access Public
router.post('/login', UserController.login);

// @route GET api/user/info
// @desc GET user info
// @access Public
router.get('/user/info', auth, UserController.retrieve);
