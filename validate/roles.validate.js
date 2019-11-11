const User = require('../models/user.model');

module.exports.changeRoles = async function (req, res, next) {
    var errors = [];
    let user = await User.find();
    console.log(req.body.roles);
    if (!req.body.roles) {
        errors.push('Roles require');
    }
    if (req.body.roles > 1) {
        errors.push('Roles ADMIN = 1, USER = 0');
    }

    if (req.body.roles < 0) {
        errors.push('Roles ADMIN = 1, USER = 0');
    }

    if (errors.length) {
        res.render('users/view', {
            errors: errors,
            users: user
        })
        return;
    }
    next();
}