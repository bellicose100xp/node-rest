/**
 * Created by buggy on 6/26/15.
 */
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./model/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);

app.get('/', function (req, res) {
    res.send("Welcome to my API!");
});

app.listen(port, function () {
    console.log('running on port:' + port);
});