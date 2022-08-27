const express = require("express");
const router = express.Router();
const userController = require('../../controllers/userControllers');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/roles_list');

// @route GET api/user/info
// @desc GET all users info
// @access Admin
router.get('/users', verifyRoles(ROLES_LIST.Admin), userController.getAllUsers);

// @route GET api/user/:id
// @desc GET a users info
// @access Admin
router.get('/user/:id', verifyRoles(ROLES_LIST.Admin), userController.getUser);

// @route DELETE api/user/:id
// @desc DELETE a user
// @access Admin
router.delete('/user/delete', verifyRoles(ROLES_LIST.Admin), userController.deleteUser)

module.exports = router;
