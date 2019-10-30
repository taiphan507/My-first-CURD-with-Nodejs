require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var usermanagerRoute = require('./routes/usermanager.route');


const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("abc"));


app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function (req, res) {
    res.render('index');
})

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/user-manager', usermanagerRoute);

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});