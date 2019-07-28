const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for Product
let productSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    categoryId: {type: String,required: true}
});

//Export the Model
module.exports = mongoose.model('Product',productSchema)