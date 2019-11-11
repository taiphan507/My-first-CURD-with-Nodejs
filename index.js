require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

let userRoute = require('./routes/user.route');
let authRoute = require('./routes/auth.route');
let productRoute = require('./routes/product.route');

let authMiddleware = require('./middlewares/auth.middleware');


const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("abc"));


app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', authMiddleware.requireAuth, function (req, res) {
    res.render('index');
})

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});