/**
 * Created by SHERRI on 3/17/15.
 */
var express    = require('express');    // call express
var app        = express();         // define our app using express
//var bodyParser = require('body-parser');  // get body-parser
//var morgan     = require('morgan');     // used to see requests
//var mongoose   = require('mongoose');
//var config     = require('./config');
var path     = require('path');
// APP CONFIGURATION ==================
// ====================================
//set the client folder to serve public assets

app.use(express.static(__dirname + '/public'));

//set up one route to the index.html file

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));

});
//start the server on port 8080
app.listen(8080);
console.log('hey, magic here on port 8080.');
