let express = require('express');
var controller = require('../controllers/usermanager.controller');

let router = express.Router();


router.get('/', controller.usermanager);



module.exports = router; // Note

// Day la ghi chu 1