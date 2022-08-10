const express = require("express");
const router = express.Router();
const userController = require('../../controllers/userControllers');
const verifyJWT = require('../../middleware/verifyJWT');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post( '/register', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),  userController.register);

// @route POST api/users/login
// @desc Login user
// @access Public
router.post('/login', userController.login);

// @route GET api/user/info
// @desc GET user info
// @access Public
router.get('/user/info', verifyJWT, userController.retrieve);

module.exports = router;
