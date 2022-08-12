const express = require("express");
const router = express.Router();
const userController = require('../../controllers/userControllers');
const verifyRoles = require('../../middleware/verifyRoles');
const ROLES_LIST = require('../../config/roles_list');

// @route GET api/user/info
// @desc GET user info
// @access Public
router.get('/users', verifyRoles(ROLES_LIST.Admin), userController.getAllUsers);

router.get('/user/:id', verifyRoles(ROLES_LIST.Admin), userController.getUser);

router.delete('/user/delete', verifyRoles(ROLES_LIST.Admin), userController.deleteUser)

module.exports = router;
