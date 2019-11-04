var md5 = require('md5');
let User = require('../models/user.model');

module.exports.register = function (req, res) {
    res.render('users/registerUser');
};

module.exports.postRegister = function (req, res) {

    registerSchema = new User({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: md5(req.body.password),
        confirmPassword: md5(req.body.confirmpassword),
        gender: req.body.gender,
        dateofbirth: req.body.dateofbirth

    });
    registerSchema.save();
    res.redirect('/users');

};

module.exports.viewUser = async function (req, res) {
    let user = await User.find();
    if (user.length) {
        res.render('users/view', {
            users: user
        });
    }
};



module.exports.deleteUser = async function (req, res) {
    var id = req.params.id
    console.log(id)
    var user = await User.findOne({ _id: id });
    console.log(user)
    if (user) {
        user.remove();
        res.redirect('users/view', {
            users: user
        });
    }
};







