// Imported the express in a variable to configure the server and use the functions
const express = require("express");
const path = require("path");
const server = express();


// Configured static files (css, scripts, images)
server.use('/pages', express.static(path.join(__dirname, '../client/pages')));
server.use('/images', express.static(path.join(__dirname, '../client/images')));
server.use('/style', express.static(path.join(__dirname, '../client/style')));
server.use('/scripts', express.static(path.join(__dirname, '../client/scripts')));   


// Created the route / and /ideas
server.get('/', function(req, res){
    // req would be the request that the frontend makes and the res would be the answer  
    res.sendFile(path.join(__dirname, '../client/pages/index.html')) 
});

server.get('/ideas', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/pages/ideas.html'))
});

// Used the listen function of express to connect the server to port 3000
server.listen(3000); 
