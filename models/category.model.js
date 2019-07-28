const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for Category
let categorySchema = new Schema({
    name: {type: String, required: true, max: 100}
});

//Export the Model
module.exports = mongoose.model('Category', categorySchema) 