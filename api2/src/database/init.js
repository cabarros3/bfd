const db = require("./db");

const sql = `
    CREATE TABLE IF NOT EXISTS alunos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        curso TEXT NOT NULL
    );
`;

db.run(sql, (erro) => {
    if(erro) {
        console.error("Erro ao criar tabela:", erro);
    }else{
        console.log("Tabela 'alunos' criada com sucesso");
    }
});