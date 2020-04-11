// Imported the express in a variable to configure the server and use the functions
const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const db = require('./db')

const server = express();

// Configured static files (css, scripts, images)
server.use('/pages', express.static(path.join(__dirname, '../client/pages')));
server.use('/images', express.static(path.join(__dirname,  '../client/images')));
server.use('/style', express.static(path.join(__dirname, '../client/style')));
server.use('/scripts', express.static(path.join(__dirname, '../client/scripts')));   


//habilitar uso do req.body
server.use(express.urlencoded({ extended:true }))

//Configured nunjucks
nunjucks.configure('../client/components', {
    express: server,
    noCache: true,
});


// Created the route / and /ideas
server.get('/', (req, res) => {
    // req would be the request that the frontend makes and the res would be the answer

    db.all(`SELECT * FROM ideas`, (err, rows) => {
        if (err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        const reversedIdeas = [...rows].reverse();
    
        let lastIdeas = [];
    
        for (let idea of reversedIdeas) {
            if(lastIdeas.length < 2) {
                lastIdeas.push(idea)
            };
        };
    
        return res.render('home.html', {ideas: lastIdeas}) 
    })
});

server.get('/ideas', (req, res) => {

    db.all(`SELECT * FROM ideas`, (err, rows) => {
        if (err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        }
 
        const reversedIdeas = [...rows].reverse();
        return res.render('ideas.html', {ideas: reversedIdeas})
    })

});

server.post('/', (req, res) =>   {
        //Inserted data on table
        const query = `
        INSERT INTO ideas(
            img,
            title,
            category,
            description,
            url
        ) VALUES (?,?,?,?,?);            
        `   
        console.log(req.body)
        const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link
        ];
        
        db.run(query, values, (err) => {
            if (err){
                console.log(err)
                return res.send("Erro no banco de dados!")
            }
            return res.redirect('/ideas')
        });
    
})

// Used the listen function of express to connect the server to port 3000
server.listen(3000); 