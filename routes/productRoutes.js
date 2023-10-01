const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.post('/new', productController.addProduct);
router.get('/:id', productController.getProductById);
router.get('/:category', productController.getProductsByCategory);

module.exports = router;