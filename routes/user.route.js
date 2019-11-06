let express = require('express');
var controller = require('../controllers/user.controller');
var validate = require('../validate/registeruser.validate');
var authMiddleware = require('../middlewares/auth.middleware');
let router = express.Router();


router.get('/registerUser', controller.register);

router.get('/view-user', authMiddleware.requireAuth, controller.viewUser);

router.get('/information-user/:id', authMiddleware.requireAuth, controller.informationUser);

router.get('/delete-user/:id', authMiddleware.requireAuth, controller.deleteUser);

router.post('/register', validate.postRegister, controller.postRegister);

router.get('/logout', authMiddleware.requireAuth, controller.logoutUser);

module.exports = router; // Note

// Day la ghi chu 1