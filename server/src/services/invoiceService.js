const invoiceModel = require("../models/InvoiceModel");

exports.invoiceCreate = async (req) => {
  try {
    let id = req.user_id;
    let reqbody = req.body;
    reqbody.userId = id;
    let data = await invoiceModel.create(reqbody);
    return data;
  } catch (e) {
    return [];
  }
};
