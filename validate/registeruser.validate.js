var md5 = require('md5');
const User = require('../models/user.model');

module.exports.postRegister = function (req, res, next) {
    var errors = [];
    var passwordregister = md5(req.body.password);
    var confirmpassword = md5(req.body.confirmpassword);

    User.find({ email: req.body.email }).then(function (value) {
        if (value) {
            errors.push('user exist');
        }

        console.log("errors in promise:", errors);
        console.log("value:", value);
        return;
    })
        .catch(function (e) {
            console.log(e);
        })
    console.log("outside", errors);

    if (!req.body.name) {
        errors.push('Name is required');
    }

    if (!req.body.phone) {
        errors.push('Phone is required');
    }

    if (!req.body.email) {
        errors.push('Email is required');
    }

    if (passwordregister != confirmpassword) {
        errors.push('Confirm password again, please');
    }


    if (errors.length) {
        res.render('users/registerUser', { // search falsy truthy
            errors: errors
        });
        return;
    }
    next();
};