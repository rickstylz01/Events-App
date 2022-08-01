const express = require("express");
const router = express.Router();
const UserController = require('../../controllers/usersController');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', UserController.register)
