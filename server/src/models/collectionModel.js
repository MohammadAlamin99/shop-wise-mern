
const mongoose = require('mongoose');

const dataScehma = mongoose.Schema({
    collectionName : {type:String, required:true},
    collectionImage:{type:String, required:true}
}) 

const collectionModel = mongoose.model('collections', dataScehma);
module.exports = collectionModel;