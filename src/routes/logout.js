const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logoutController');

// @route GET api/users/logout
// @desc Logout a user and delete the refresh token
// @access Public
router.get('/logout', logoutController.handleLogout);

module.exports = router;
