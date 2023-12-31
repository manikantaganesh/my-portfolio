var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});

var EmailController = require('./src/Models/Email/EmailController.js');
app.use('/', EmailController);

module.exports = app;