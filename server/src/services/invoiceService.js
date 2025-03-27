const invoiceModel = require("../models/InvoiceModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

exports.invoiceCreate = async (req) => {
  try {
    const userID = req.user_id;
    let reqbody = { ...req.body, userID };
    let data = await invoiceModel.create(reqbody);
    return data;
  } catch (error) {
    return error;
  }
};



exports.invoiceGet = async (req) => {
  try {
    const id = new ObjectId(req.user_id);
    let data = await invoiceModel.aggregate([
      { $match: { userID: id } },
      { $sort: { placed_at: -1 } },
      { $limit: 1 },
    ]);
    return { status: "success", message: data };
  } catch (error) {
    return error;
  }
};