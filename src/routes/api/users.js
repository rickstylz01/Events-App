const express = require("express");
const router = express.Router();
const userController = require('../../controllers/userControllers');
const verifyJWT = require('../../middleware/verifyJWT');

// @route GET api/user/info
// @desc GET user info
// @access Public
router.get('/user/info', verifyJWT, userController.retrieve);

module.exports = router;
