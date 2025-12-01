let alunos = [
    {id: 1, nome: "Ana", curso: "DS"},
    {id: 2, nome: "João", curso: 'Redes'}
];

//listar todos
function listar(req, res){
    res.json(alunos);
}

// buscar por id
function buscarPorId(req, res){
    const id = Number(req.params.id);
    const aluno = alunos.find(a => a.id === id);

    if(!aluno){
        return res.status(404).json({erro:"Aluno não encontrado"});
    }

    res.json(aluno)
}

//criar novo aluno
function criar(req, res){
    const {nome, curso} = req.body;

    const novo = {
        id: alunos.length + 1,
        nome, curso
    }

    alunos.push(novo);
    res.status(201).json(novo)
}

// atualizar
function atualizar(req, res){
    const id = Number(req.params.id)
    const {nome, curso} = req.body;

    const aluno = alunos.find(a => a.id === id);
    if(!aluno){
        return res.status(400).json({erro: "Aluno não encontrado"})
    }

    aluno.nome = nome;
    aluno.curso = curso

    res.json(aluno);
}

// excluir
function excluir(req, res){
    const id = Number(req.params.id)
    alunos = alunos.filter(a => a.id !== id)

    res.json({mensagem: "Aluno removido com sucesso"});
}


module.exports = {listar, buscarPorId, criar, atualizar, excluir}