let express = require('express');
var controller = require('../controllers/user.controller');
let router = express.Router();

var validate = require('../validate/registeruser.validate');


router.get('/', controller.index);

router.get('/registerUser', controller.register);

router.post('/register', validate.postRegister, controller.postRegister);

module.exports = router; // Note

// Day la ghi chu 1