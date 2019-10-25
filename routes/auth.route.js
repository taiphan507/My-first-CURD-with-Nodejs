let express = require('express');
var controller = require('../controllers/auth.controller');

let router = express.Router();

router.get('/login', controller.login);
router.post('/login', controller.postLogin);

module.exports = router; // Note

// Day la ghi chu 1