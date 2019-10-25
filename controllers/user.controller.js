
let User = require('../models/user.model');

module.exports.register = function (req, res) {
    res.render('users/registerUser');
};

module.exports.postRegister = function (req, res) {
    registerSchema = new User({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmpassword,
        gender: req.body.gender,
        dateofbirth: req.body.dateofbirth

    });
    registerSchema.save();
    res.redirect('/users');

};






