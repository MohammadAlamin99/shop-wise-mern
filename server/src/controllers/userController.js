const { registration, login } = require("../services/userService")

exports.userRegistraion = async(req, res)=>{
    let result = await registration(req);
    return res.status(200).json(result);
}


exports.userLogin = async (req, res)=>{
    let result = await login(req);
    return res.status(200).json(result);
}