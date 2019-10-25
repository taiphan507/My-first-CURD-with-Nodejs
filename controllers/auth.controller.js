
// var md5 = require('md5');

module.exports.login = function (req, res) {
    res.render('users/login');
};

module.exports.postLogin = function (req, res) {
    // var email = req.body.email;
    // var password = req.body.password;
    // var user = db.get('users').find({ email: email }).value();

    // if (!user) {
    //     res.render('auth/login', {
    //         errors: [
    //             'User does not exist.'
    //         ],
    //         values: req.body
    //     });
    //     return;
    // }

    // var hasdedPassword = md5(password);//password of user request to server

    // if (user.password !== hasdedPassword) {
    //     res.render('auth/login', {
    //         errors: [
    //             'Wrong passowrd.'
    //         ],
    //         values: req.body
    //     });
    //     return;
    // }

    // res.cookie('userId', user.id, {
    //     signed: true
    // });
    // res.redirect('/users');
};