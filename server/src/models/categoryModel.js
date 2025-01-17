
const mongoose = require('mongoose');

const dataScehma = mongoose.Schema({
    categoryName : {type:String, required:true},
    categoryImg:{type:String, required:true}
}) 

const categoryModel = mongoose.model('category', dataScehma);
module.exports = categoryModel;