let livros = [
    {
        id: 1,
        titulo: "A culpa é das estrelas",
        autor: "Jhon Green"
    },
    {
        id: 2,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis"
    }
]

// para listar todos
function listar(req, res){
    res.json(livros)
}

// para buscar por id
function buscarPorId(req, res){
    const id = Number(req.params.id)
    const livro = livros.find(l => l.id === id)

    if(!livro){
        return res.status(404).json({erro: "Aluno não encontrado"})
    }

    res.json(livro)
}


// para criar livro
function criar(req, res){
    const {titulo, autor} = req.body

    const novo = {
        id: livros.length + 1,
        titulo, autor
    }

    livros.push(novo)
    res.status(201).json(novo)
}

// para atualizar
function atualizar(req, res){
    const id = Number(req.params.id)
    const { titulo, autor } = req.body

    const livro = livros.find(l => l.id === id)

    if(!livro){
        return res.status(404).json({erro: "livro não encontrado"})
    }

    livro.titulo = titulo;
    livro.autor = autor;

    res.json(livro)
}


// para excluir
function excluir(req, res){
    const id = Number(req.params.id)
    livros = livros.filter(l = l.id !== id)

    res.json({erro: "Livro excluido com sucesso"})
}

module.exports = {listar, buscarPorId, criar, atualizar, excluir}