const mongoose = require('mongoose');

let registerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: String,
        require: true,
        minlength: 1,
        maxlength: 15
    },
    email: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 8,
        maxlength: 100
    },
    confirmPassword: {
        type: String,
        require: true,
        minlength: 8,
        maxlength: 100
    },
    gender: {
        type: String,
        require: true,
        default: "Nam"
    },
    dateofbirth: {
        type: String,
        default: "01/1/1970"
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

let User = mongoose.model('User', registerSchema, 'users');

module.exports = User;	