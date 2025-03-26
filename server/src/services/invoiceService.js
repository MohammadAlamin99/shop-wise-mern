const invoiceModel = require("../models/InvoiceModel");

exports.invoiceCreate = async (req) => {
  try {
    const userID = req.user_id;
    let reqbody = { ...req.body, userID }; 
    let data = await invoiceModel.create(reqbody);
    return data
  } catch (error) {
    console.error("Error creating invoice:", error);
    return error
  }
};

