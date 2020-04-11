const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./server.db');

db.serialize(() => {
    // Created table
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            img TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            url TEXT
        );
    `);

//     //Inserted data on table
//     const query = `
//     INSERT INTO ideas(
//         img,
//         title,
//         category,
//         description,
//         url
//     ) VALUES (?,?,?,?,?);            
// `   
//     const values = [
//     "https://image.flaticon.com/icons/svg/2729/2729007.svg",
//     "Curso de Programação",
//     "Estudos",
//     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores quo pariatur harum dolorum fugiat voluptates delectus veniam architecto amet quos qui consequatur iure, deserunt nulla aut earum culpa expedita?",
//     "https://github.com/viniciuslima-99"
//     ];
    
//     db.run(query, values, function(err){
//         if (err) return console.log(err)

//         console.log(this)
//     });

    // List database
    // db.all(`SELECT * FROM ideas`, (err, rows) => {
    //     if (err){
    //         console.log(err)
    //         return res.send("Erro no banco de dados!")
    //     }

    // })

    // //Deleted data on table

    // db.run(`DELETE FROM ideas WHERE id = ?`, [], function(err) {
    //     if (err) return console.log(err)

    //     console.log("Deletei", this)
    // })

});

module.exports =  db;