const { reviewCreate, getAllReviews } = require("../services/reviewService");

exports.createReview = async(req, res)=>{
    let result = await reviewCreate(req);
    return res.status(200).json(result);
}


exports.getReview = async(req, res)=>{
    let result = await getAllReviews(req);
    return res.status(200).json(result);
}
