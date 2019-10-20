const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    avatar: String,
    phone: String
});

let User = mongoose.model('User', userSchema, 'users');

module.exports = User;	