let express = require('express');
let controller = require('../controllers/product.controller');
let authMiddleware = require('../middlewares/auth.middleware');
let router = express.Router();

router.get('/', authMiddleware.requireAuth, controller.index);
router.get('/manager-products', authMiddleware.requireAuth, controller.managerUser);
router.get('/create-product', authMiddleware.requireAuth, controller.createProduct);
module.exports = router; // Note

// Day la ghi chu 1