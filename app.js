//  ==================================
//       IMPORT REQUIRED PACKAGES
//  ==================================
var express = require('express');

//  ==================================
//             DECLARATIONS
//  ==================================
var app = express();
//  Set the view engine
app.set("view-engine", "ejs");

//  ==================================
//                ROUTES
//  ==================================
//  Serve a file
app.get('/', function (req, res) {
  res.render('home.ejs');
});

//  ==================================
//                SERVER
//  ==================================
app.listen(3000, function () {
  console.log('PubLocator Server listening on port 3000!');
});