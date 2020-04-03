// Imported the express in a variable to configure the server and use the functions
const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");

const server = express();

// Configured static files (css, scripts, images)
server.use('/pages', express.static(path.join(__dirname, '../client/pages')));
server.use('/images', express.static(path.join(__dirname,  '../client/images')));
server.use('/style', express.static(path.join(__dirname, '../client/style')));
server.use('/scripts', express.static(path.join(__dirname, '../client/scripts')));   


//Configured nunjucks
nunjucks.configure('../client/components', {
    express: server,
    noCache: true,
});

    
const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Estudos",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores quo pariatur harum dolorum fugiat voluptates delectus veniam architecto amet quos qui consequatur iure, deserunt nulla aut earum culpa expedita?",
        url: "https://github.com/viniciuslima-99"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores quo pariatur harum dolorum fugiat voluptates delectus veniam architecto amet quos qui consequatur iure, deserunt nulla aut earum culpa expedita?",
        url: "https://github.com/viniciuslima-99"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores quo pariatur harum dolorum fugiat voluptates delectus veniam architecto amet quos qui consequatur iure, deserunt nulla aut earum culpa expedita?",
        url: "https://github.com/viniciuslima-99"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores quo pariatur harum dolorum fugiat voluptates delectus veniam architecto amet quos qui consequatur iure, deserunt nulla aut earum culpa expedita?",
        url: "https://github.com/viniciuslima-99"
    },
]


// Created the route / and /ideas
server.get('/', function(req, res){
    // req would be the request that the frontend makes and the res would be the answer

    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = [];

    for (let idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
        };
    };

    return res.render('home.html', {ideas: lastIdeas}) 
});

server.get('/ideas', function(req, res) {

    const reversedIdeas = [...ideas].reverse();

    res.render('ideas.html', {ideas: reversedIdeas})
});

// Used the listen function of express to connect the server to port 3000
server.listen(3000); 
