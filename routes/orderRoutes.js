const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/orderController');

router.post('/', orderCtrl.createOrder);
router.get('/:id', orderCtrl.getOrderById);
router.delete('/:id', orderCtrl.deleteOrder);

module.exports = router;
