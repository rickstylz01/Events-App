const express = require('express');
const router = express.Router();
const registerController = require("../controllers/registerController");

// @route POST api/users/register
// @desc Register.js user
// @access Public
router.post( '/register', registerController.handleNewUser);

module.exports = router;
