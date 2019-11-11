var md5 = require('md5');
const User = require('../models/user.model');

module.exports.updatePassword = async function (req, res, next) {
    var errors = [];
    var success = [];
    let user = await User.find({ _id: req.params.id });
    if (!req.body.password) {
        errors.push('Password current empty');
    }

    if (!req.body.changePassword) {
        errors.push('New password empty');
    }

    if (!req.body.confirmPassword) {
        errors.push('Cofirm password empty');
    }

    if (req.body.password == req.body.changePassword) {
        errors.push('New password same password currently')
    }

    if (user[0].password != md5(req.body.password)) {
        errors.push('Password current incorrect');
    }

    if (md5(req.body.changePassword) != md5(req.body.confirmPassword)) {
        errors.push('Confirm password incorrect')
    }

    if (!errors.length) {
        success.push('Change password success');
    }

    if (errors.length) {
        res.render('users/changePassword', {
            errors: errors
        })
        return;
    }
    else if (success.length) {
        res.render('users/changePassword', {
            success: success
        });
    }
    next();
}