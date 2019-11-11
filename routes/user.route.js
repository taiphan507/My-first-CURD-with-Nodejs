let express = require('express');
var controller = require('../controllers/user.controller');
var validate = require('../validate/registeruser.validate');
var authMiddleware = require('../middlewares/auth.middleware');
var validatePassword = require('../validate/changPassword.validate');
var validateInfoUser = require('../validate/informationUser.validate');
var validateRoles = require('../validate/roles.validate')
let router = express.Router();


router.get('/registerUser', controller.register);
router.get('/view-user', authMiddleware.requireAuth, controller.viewUser);
router.get('/information-user/:id', authMiddleware.requireAuth, controller.informationUser);
router.get('/delete-user/:id', authMiddleware.requireAuth, controller.deleteUser);
router.get('/logout', authMiddleware.requireAuth, controller.logoutUser);
router.get('/change-password/:id', authMiddleware.requireAuth, controller.changePassword);
router.post('/change-password/:id', authMiddleware.requireAuth, validatePassword.updatePassword, controller.updatePassword);
router.get('/search', authMiddleware.requireAuth, controller.searchUser);

router.post('/change-roles/:id', authMiddleware.requireAuth, validateRoles.changeRoles, controller.changeRoles);
router.post('/register', validate.postRegister, controller.postRegister);
router.post('/information-user/:id', authMiddleware.requireAuth, validateInfoUser.updateUser, controller.updateUser);

module.exports = router; // Note

// Day la ghi chu 1