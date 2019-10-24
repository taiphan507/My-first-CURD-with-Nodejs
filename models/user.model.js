const mongoose = require('mongoose');

let registerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    confirmPassword: {
        type: String,
        require: true,
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
        require: true
    },
    updated_at: {
        type: Date,
        default: Date.now,
        require: true
    }

});

let User = mongoose.model('User', registerSchema, 'users');

module.exports = User;	