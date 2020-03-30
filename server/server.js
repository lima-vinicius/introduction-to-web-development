// Imported the express in a variable to configure the server and use the functions
const express = require("express");
const server = express();


// Created the route /  
server.get("/", function(req, res){
    // req would be the request that the frontend makes and the res would be the answer  
    console.log("Respondendo o terminal na rota /")
    res.send('Respondendo a pagina web na rota /') 
})

// Used the listen function of express to connect the server to port 3000
server.listen(3000)
