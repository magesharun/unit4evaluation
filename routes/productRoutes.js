const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');

router.post('/', productCtrl.createProduct);
router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getProductById);
router.put('/:id', productCtrl.updateProduct);
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;
