// conexão principal com banco de dados SQLite

const sqlite3 = require("sqlite3").verbose()


const db = new sqlite3.Database("./src/database/database.sqlite", (erro) =>{
    if(erro){
        console.error("Erro ao conectar com o banco  SQLite", erro);
    }else{
        console.log("Conexão com SQLite realizada com sucesso!")
    }
});

module.exports = db;