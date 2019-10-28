const User = require('../models/user.model');
var md5 = require('md5');

module.exports.login = function (req, res) {
    res.render('users/login');
};

module.exports.postLogin = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    User.find({ email: email }).then(function (value) {
        console.log(value);// Find ra mot mang gom cac obj
        if (!value[0]) {
            res.render('users/login', {
                errors: [
                    'User does not exist.'
                ],
                values: req.body
            });
            return;
        }

        // var hasdedPassword = md5(password);//password of user request to server

        if (value[0].password !== password) {
            res.render('users/login', {
                errors: [
                    'Wrong passowrd.'
                ],
                values: req.body
            });
            return;
        }

        // res.cookie('userId', user._id, {
        //     signed: true
        // });
        res.redirect('/products');
    });


};