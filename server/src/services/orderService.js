const InvoiceModel = require("../models/InvoiceModel");

// exports.getOrderList = async (req, res) => {
//   try {
//     let data = await InvoiceModel.find();
//     return res.status(200).json({ status: "success", message: data });
//   } catch (e) {
//     return res.status(500).json({ status: "error", message: e.message });
//   }
// };

exports.getOrderList = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const skip = (page - 1) * limit;

    const total = await InvoiceModel.countDocuments();
    const data = await InvoiceModel.find().skip(skip).limit(limit);
    const totalPages = Math.ceil(total / limit);

    return res.status(200).json({
      status: "success",
      data,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        limit,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    });
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
