const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true,
    },
    amount: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated_at: {
        type: Date,
        default: Date.now,
        required: true
    }
});

let Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;	