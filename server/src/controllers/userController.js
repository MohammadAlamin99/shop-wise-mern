const { registration, login, UpadateProfile, UserProfileDetails } = require("../services/userService")

exports.userRegistraion = async(req, res)=>{
    let result = await registration(req);
    return res.status(200).json(result);
}


exports.userLogin = async (req, res)=>{
    let result = await login(req);
    return res.status(200).json(result);
}

exports.userUpdate = async (req, res)=>{
    let result = await UpadateProfile (req);
    return res.status(200).json(result);
}

exports.userDetails = async (req, res)=>{
    let result = await UserProfileDetails (req);
    return res.status(200).json(result);
}