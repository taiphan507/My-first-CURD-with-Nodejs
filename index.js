require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

var userRoute = require('./routes/user.route');


const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');







app.get('/', function (req, res) {
    res.render('index');
})

app.use('/users', userRoute);

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});