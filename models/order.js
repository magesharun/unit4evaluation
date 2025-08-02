const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true, min: 1 }
    }
  ],
  orderDate: { type: Date, default: Date.now },
  totalAmount: { type: Number }
});

orderSchema.pre('save', async function (next) {
  let total = 0;
  for (const item of this.products) {
    const product = await mongoose.model('Product').findById(item.productId);
    total += product.price * item.quantity;
  }
  this.totalAmount = total;
  next();
});

module.exports = mongoose.model('Order', orderSchema);
