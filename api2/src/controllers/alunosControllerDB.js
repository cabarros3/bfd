const db = require("../database/db")

// listar todos
function listar(req, res){
    db.all("SELECT * FROM alunos", (erro, linhas) =>{
        if(erro) return res.status(500).json({erro: "Erro ao buscar alunos"});
        res.json(linhas);
    });
}

// BUSCAR POR ID
function buscarPorId(req, res){
    const id = req.params.id;

    db.get("SELECT * FROM alunos WHERE id = ?;", [id], (erro, linha) => {
        if(erro) return res.status(500).json({erro: "Erro ao buscar o aluno"});
        if(!linha) return res.status(404).json({erro: "Aluno não encontado"});

        res.json(linha);
    })
}

// CRIAR NOVO

function criar(req, res) {
    const { nome, curso } = req.body;

    db.run(
        "INSERT INTO alunos (nome, curso) VALUES (?, ?)",
        [nome, curso],
        function(erro){
            if(erro) return res.status(500).json({erro: "Erro ao criar aluno"})

            res.status(201).json({
                id: this.lastID,
                nome,
                curso
            });
        }
    );
}


// ATUALIZAR
function atualizar(req, res){
    const id = req.params.id;
    const { nome, curso } = req.body;

    db.run(
        "UPDATE alunos SET nome = ?, curso = ? WHERE id = ?",
        [nome, curso, id], 
    function(erro){
        if(erro) return res.status(500).json({erro: "Erro ao atualizar aluno"});
        if(this.changes === 0)
            return res.status(404).json({erro: "Aluno não encontrado"});

        res.json({id, nome, curso});
    }
    )
}


// Deleta
function excluir(req, res){
    const id = req.params.id;

    db.run("delete FROM alunos WHERE id = ?", [id], function (erro){
        if(erro) return res.status(500).json({erro: "Erro ao excluir aluno"});
        if(this.changes === 0)
            return res.status(404).json({erro: "Aluno não encontrado"});
        res.json({ mensagem: "Aluno removido com sucesso!" });
    });
}

module.exports = {listar, buscarPorId, criar, atualizar, excluir}