const mongoose = require("mongoose");

const invoiceModel = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId },
  order_id: { type: String, unique: true },
  full_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  email: { type: String, required: true},
  full_address: { type: String, required: true },
  country: { type: String, required: true },
  payment_method: { type: String },
  order_summary: [
    {
      productID: { type: mongoose.Schema.Types.ObjectId },
      color: { type: String },
      size: { type: String },
      qty: { type: Number },
      product: {
        discountPrice: { type: Number },
        image: { type: String },
        price: { type: Number },
        title: { type: String },
      },
    },
  ],
  subtotal: { type: Number,  required: true },
  shipping_cost: { type: Number, default: 0 },
  total: { type: Number },
  order_status: {
    type: String,
    enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
    default: "Confirmed",
  },
  placed_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("invoices", invoiceModel);
