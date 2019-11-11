var md5 = require('md5');
const User = require('../models/user.model');

module.exports.updateUser = async function (req, res, next) {
    var errors = [];
    let user = await User.find({ _id: req.params.id });
    if (!req.body.name) {
        errors.push('Name empty');
    }

    if (req.body.name == user[0].name && req.body.phone == user[0].phone) {
        errors.push('Information not edit')
    }

    if (!req.body.phone) {
        errors.push('Number phone empty');
    }

    if (errors.length) {
        res.render('users/informationUser', {
            errors: errors
        })
        return;
    }
    next();
}