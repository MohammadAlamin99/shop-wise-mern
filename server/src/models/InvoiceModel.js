const mongoose = require("mongoose");

const invoiceModel = new mongoose.Schema({
  order_id: { type: String, required: true, unique: true },
  customer: {
    full_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
  },
  shipping_address: {
    full_address: { type: String, required: true },
    country: { type: String, required: true },
  },
  payment_method: { type: String, required: true },
  order_summary: {
    items: [
      {
        product_name: { type: String, required: true },
        color: { type: String },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    subtotal: { type: Number, required: true },
    shipping_cost: { type: Number, default: 0 },
    total: { type: Number, required: true },
  },
  order_status: {
    type: String,
    enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
    default: "Confirmed",
  },
  placed_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("invoices", invoiceModel);
