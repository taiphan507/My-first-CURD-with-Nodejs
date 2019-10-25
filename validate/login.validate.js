module.exports.index = function (req, res, next) {
    var errors = [];

    if (!req.body.name) {
        errors.push('Name is required');
    }

    if (!req.body.phone) {
        errors.push('Phone is required');
    }

    if (!req.body.email) {
        errors.push('Email is required');
    }

    if (req.body.password != req.body.confirmpassword) {
        errors.push('Confirm password again, please');
    }

    if (errors.length) {
        res.render('users/registerUser', { // search falsy truthy
            errors: errors,
            values: req.body,
        });
        return;
    }
    next();
};