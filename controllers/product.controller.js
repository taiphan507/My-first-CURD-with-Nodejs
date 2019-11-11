module.exports.index = function (req, res) {
    res.render('products/index');
};

module.exports.managerUser = function (req, res) {
    res.render('products/managerProducts');
};


module.exports.createProduct = function (req, res) {
    res.render('products/createProduct');
};
