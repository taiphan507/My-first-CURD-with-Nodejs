require('dotenv').config();
var express = require('express');
var app = express();
var mongoose = require('mongoose');

let userRoute = require('./routes/user.route');


const port = 3000;



app.set('view engine', 'pug');
app.set('views', './views');



mongoose.connect(process.env.MONGO_URL);


app.get('/', function (req, res) {
    res.render('index');
})

app.use('/users', userRoute);

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});