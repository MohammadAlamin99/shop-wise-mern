const { invoiceCreate, invoiceGet, orderGet } = require("../services/invoiceService");


exports.createInvoice = async(req, res)=>{
    let result = await invoiceCreate(req);
    return res.status(200).json(result);
}


exports.getInvoice = async (req, res)=>{
    let result = await invoiceGet(req);
    return res.status(200).json(result);
}
exports.getOrderList = async (req, res)=>{
    let result = await orderGet(req);
    return res.status(200).json(result);
}