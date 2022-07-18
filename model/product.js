const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : {
        type : String,
        require : true, 
    },
    price : Number,
    img : String
})

const product = mongoose.model('product',productSchema);

module.exports = product;