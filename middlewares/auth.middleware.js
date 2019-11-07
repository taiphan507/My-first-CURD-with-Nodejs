const User = require('../models/user.model');

module.exports.requireAuth = async function (req, res, next) {
	if (!req.signedCookies.userId) {
		res.redirect('/auth/login');
		return;
	}
	var user = await User.find({ _id: req.signedCookies.userId });

	if (!user) {
		res.redirect('/auth/login');
		return;
	}

	res.locals.user = user[0];// locals stogare varible of user in current work session 
	console.log("USER:", user);
	console.log("Local: ", res.locals.user);
	next();
};
