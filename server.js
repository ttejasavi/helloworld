/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: ___Tejasavi___________________ Student ID: ___174401216___________ Date: ___17 MAY 2023_____________
*
*  Online (Cyclic) URL: https://energetic-rugby-shirt-colt.cyclic.app/_______________________________________________________
*
********************************************************************************/var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Tejasavi - 174401216. My favourite colour is blue and I love to enjoy cherry blossom.");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
