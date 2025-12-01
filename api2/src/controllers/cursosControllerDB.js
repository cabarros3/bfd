const db = require("../database/db")

//listar todos os cursos
function listar(req, res){
    db.all("SELECT * FROM cursos", (erro, linhas)=>{
        if(erro) return res.status(500).json({erro: "Erro ao buscar cursos"});
        res.json(linhas);
    });
}


// bucar por id
function buscarPorId(req, res){
    const id = req.params.id

    db.get("SELECT * FROM cursos WHERE id = ?", [id], (erro, linha)=>{
        if(erro) return res.status(500).json({erro: "Erro ao buscar curso"});
        if(!linha) return res.status(404).json({ erro: "Aluno não curso" });

        res.json(linha);
    })
}


// criar novo curso
function criar(req, res){
    const {nome, carga_horaria, modalidade} = req.body;

    db.run(
        "INSERT INTO cursos (nome, carga_horaria, modalidade) VALUES (?, ?, ?)",
        [nome, carga_horaria, modalidade],
        function (erro){
            if(erro) return res.status(500).json({erro: "Erro ao criar curso"});

            res.status(201).json({
                id: this.lastID, 
                nome,
                carga_horaria,
                modalidade
            })
        }
    )
}

// atualizar

function atualizar(req, res){
    const id = req.params.id;
    const {nome, carga_horaria, modalidade} = req.body

    db.run(
        "UPDATE cursos SET nome = ?, carga_horaria = ?, modalidade = ? WHERE id = ?",
        [nome, carga_horaria, modalidade, id],
        function(erro){
            if(erro) return res.status(500).json({erro: "Erro ao atualizar o curso"});
            if(this.changes === 0)
                return res.status(404).json({erro: "Curso não encontrado"});

            res.json({id, nome, carga_horaria, modalidade});
        }
    );
}

// deletar

function excluir(res, res){
    const id = req.params.id

    db.run("DELETE FROM cursos WHERE id = ?", [id], function(erro){
        if(erro) return res.status(500).json({erro: "Erro ao excluir o curso"});
        if(this.changes === 0)
            return res.status(404).json({erro: "Curso não encontrado"});
        
        res.json({mensagem: "Curso excluido com sucesso!"});
    });
}


module.exports = {listar, buscarPorId, criar, atualizar, excluir}