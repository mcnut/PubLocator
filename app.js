//  ==================================
//  CREATE A BASIC EXPRESS APPLICATION
//  ==================================

//  Call the required packages
var express = require('express');

//  Create an instance of express
var app = express();

//  Test using a GET request to http://localhost:3000
app.get('/', function (req, res) {
  res.send('Hello PubLocator!');
});

//  Start the server 
app.listen(3000, function () {
  console.log('PubLocator Server listening on port 3000!');
});