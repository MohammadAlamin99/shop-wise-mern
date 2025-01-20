const { registration } = require("../services/userService")

exports.userRegistraion = async(req, res)=>{
    let result = await registration(req);
    return res.status(200).json(result);
}