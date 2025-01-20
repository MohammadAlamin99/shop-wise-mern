
const userModel = require("../models/userModel");

exports.registration = async(req)=>{
    try {
        let reqBody = req.body;
        let data = await userModel.create(reqBody);
        return{status:"success", message:data}
    } catch (e) {
        return{status:"fail", message:e}
    }
}