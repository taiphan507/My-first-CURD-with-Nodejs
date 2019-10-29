var md5 = require('md5');
const User = require('../models/user.model');
// const { check, validationResult } = require('express-validator');

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

module.exports.postRegister = async function (req, res, next) {
    var errors = [];
    var success = [];
    console.log(success.length);
    var passwordregister = md5(req.body.password);
    var confirmpassword = md5(req.body.confirmpassword);

    var user = await User.find({ email: req.body.email });

    if (!validateEmail(req.body.email)) {
        errors.push('Invalid email')
    };

    if (user.length) {
        errors.push('User exist');
    }

    if (!req.body.name) {
        errors.push('Name is required');
    }

    if (!req.body.phone) {
        errors.push('Phone is required');
    }

    // if (!req.body.email) {
    //     errors.push('Email is required');
    // }

    if (passwordregister != confirmpassword) {
        errors.push('Confirm password again, please');
    }

    if (!errors.length) {
        success.push('Register success');
    }

    if (errors.length) {
        res.render('users/registerUser', { // search falsy truthy
            errors: errors
        });
        return;
    }
    else if (success.length) {
        res.render('users/registerUser', {
            success: success
        });
    }
    next();
};