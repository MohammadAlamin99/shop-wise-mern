const InvoiceModel = require("../models/InvoiceModel");

exports.getOrderList = async (req, res) => {
  try {
    let data = await InvoiceModel.find();
    return res.status(200).json({ status: "success", message: data });
  } catch (e) {
    return res.status(500).json({ status: "error", message: e.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const reqbody = req.body;
    const orderId = reqbody.orderID;
    let data = await InvoiceModel.updateOne(
      { _id: orderId },
      { $set: reqbody }
    );
    return res.status(200).json({ status: "success", message: data });
  } catch (e) {
    return res.status(500).json({ status: "error", message: e.message });
  }
};
