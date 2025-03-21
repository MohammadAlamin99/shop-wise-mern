const { invoiceCreate } = require("../services/invoiceService");


exports.createInvoice = async(req, res)=>{
    let result = await invoiceCreate(req);
    return res.status(200).json(result);
}
