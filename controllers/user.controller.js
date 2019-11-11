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

module.exports.viewUser = async function (req, res, next) {
    let user = await User.find();
    if (user.length) {
        res.render('users/view', {
            users: user
        });
    }
};

module.exports.informationUser = async function (req, res) {
    res.render('users/informationUser', {
        user: res.locals.user
    });
};

module.exports.updateUser = async function (req, res) {
    let myquery = { _id: req.params.id };
    let valueUpdate = {
        $set: {
            name: req.body.name,
            phone: req.body.phone,
            dateofbirth: req.body.dateofbirth
        }
    }
    await User.updateOne(myquery, valueUpdate, function (err, res) {
        if (err) throw err
        console.log("Cập nhật thành công");
    });
    res.redirect('/users/information-user/' + req.params.id);
}

module.exports.changeRoles = async function (req, res) {
    let myquery = { _id: req.params.id };
    let valueUpdate = {
        $set: {
            roles: req.body.roles
        }
    }
    await User.updateOne(myquery, valueUpdate, function (err, res) {
        if (err) throw err
        console.log("Cập nhật thành công");
    });
    res.redirect('/users/view-user/');

}

module.exports.deleteUser = async function (req, res) {
    let id = req.params.id;
    await User.findByIdAndRemove({ _id: id });
    res.redirect('/users/view-user');
};

module.exports.changePassword = function (req, res) {
    res.render('users/changePassword');
}

module.exports.updatePassword = async function (req, res) {
    let myquery = { _id: req.params.id };
    let valueUpdate = {
        $set: {
            password: md5(req.body.changePassword),
            confirmPassword: md5(req.body.confirmPassword)
        }
    }
    await User.updateOne(myquery, valueUpdate, function (err, res) {
        if (err) throw err
        console.log("Cập nhật thành công");
    });
    res.redirect('/users/change-password/' + req.params.id);


}

module.exports.searchUser = async function (req, res) {
    let query = req.query.search;
    console.group(" query", query);
    let user = await User.find();
    var matchUsers = await user.filter((user) => {

        return user.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
    });
    res.render('users/view', {
        users: matchUsers
    })
}



module.exports.logoutUser = function (req, res) {
    res.clearCookie('userId');
    res.redirect('/');
}






