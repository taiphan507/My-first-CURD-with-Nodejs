const User = require('../models/user.model');
var md5 = require('md5');

module.exports.login = function (req, res) {
    res.render('users/login');
};

module.exports.postLogin = async function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var user = await User.find({ email: email });
    // console.log(user);
    if (!user.length) {
        res.render('users/login', {
            errors: [
                'User does not exist.'
            ],
            values: req.body
        });
        return;
    }

    var hasdedPassword = md5(password);//password of user request to server
    if (user[0].password !== hasdedPassword) {
        res.render('users/login', {
            errors: [
                'Wrong passowrd.'
            ],
            values: req.body
        });
        return;
    }

    res.cookie('userId', user[0].id, {
        signed: true
    });
    res.redirect('/');

};