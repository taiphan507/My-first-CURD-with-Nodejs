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
    var id = req.params.id;
    await User.findByIdAndRemove({ _id: id });
    res.redirect('users/view');
};

module.exports.informationUser = async function (req, res) {
    let id = req.params.id;
    let user = await User.find({ _id: id });
    console.log(user[0])
    if (user.length) {
        res.render('users/informationUser', {
            values: user[0]
        });
    }
};

module.exports.logoutUser = function (req, res) {
    res.clearCookie('userId');
    res.redirect('/');
}






