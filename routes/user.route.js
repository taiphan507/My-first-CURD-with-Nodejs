let express = require('express');
var controller = require('../controllers/user.controller');
var validate = require('../validate/registeruser.validate');

let router = express.Router();


router.get('/registerUser', controller.register);

router.get('/view-user', controller.viewUser);

router.delete('/delete-user', controller.deleteUser);

router.post('/register', validate.postRegister, controller.postRegister);

module.exports = router; // Note

// Day la ghi chu 1