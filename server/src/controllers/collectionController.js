
const { collection } = require("../services/collectionService");

exports.collectionList = async(req, res)=>{
    let result = await collection(req);
    return res.status(200).json(result);
}