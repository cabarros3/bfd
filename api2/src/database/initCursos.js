const db = require("./db");

const sql = `
    CREATE TABLE IF NOT EXISTS cursos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        carga_horaria TEXT NOT NULL,
        modalidade TEXT NOT NULL
    );
`;

db.run(sql, (erro) => {
    if(erro) {
        console.error("Erro ao criar tabela:", erro);
    }else{
        console.log("Tabela 'cursos' criada com sucesso");
    }
});