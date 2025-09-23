class Livro{
    private titulo: string;
    private autor: string;
    private ano: string;

    constructor(titulo: string, autor: string, ano: string){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    get getTitulo(){
        return this.titulo
    }

    get getAutor(){
        return this.autor
    }

    get getAno(){
        return this.ano
    }

    set setTitulo(novoTitulo: string){
        this.titulo = novoTitulo
        console.log(novoTitulo)
    }

    set setAutor(novoAutor: string){
        this.autor = novoAutor
        console.log(novoAutor)
    }

    set setAno(novoAno: string){
        this.ano = novoAno
        console.log(novoAno)
    }
}

class Usuario{
    private nome: string
    private email: string

    constructor(nome: string, email: string){
        this.nome = nome
        this.email = email
    }

    get getNome(){
        return this.nome
    }

    get getEmail(){
        return this.email
    }

    set setNome(novoNome: string){
        this.nome = novoNome
        console.log(this.nome)
    }

    set setEmail(novoEmail: string){
        this.email = novoEmail
        console.log(this.email)
    }
}


class Emprestimo{
    private livros: Livro[] = []
    private data: Date = new Date()
    private usuario: Usuario

    constructor(usuario: Usuario){
        this.usuario = usuario
    }

    get getData(){
        return this.data
    }
    get getUsuario(){
        return this.usuario
    }

    pegarLivro(livro: Livro){
        this.livros.push(livro)
        console.log(`O livro ${livro.getTitulo} foi emprestado`)
    }

    exibirDetalhes(){
        console.log("====== Detalhes do Empréstimo =======")
        for(let i: number = 0; i < this.livros.length; i++){
            console.log(`Titulo: ${this.livros[i].getTitulo}`)
            console.log(`Autor: ${this.livros[i].getAutor}`)
            console.log(`Ano: ${this.livros[i].getAno}`)
            console.log("=======================================")
        }
        console.log("++++++++ Detalhes do Usuário ++++++++++")
        console.log(`Usuário: ${this.usuario.getNome}`)
        console.log(`Usuário: ${this.usuario.getEmail}`)
        console.log(`Data do empréstimo: ${this.data}`)
        console.log("=======================================")
    }
}


// testando a classe livro
const l = new Livro("A culpa é das estrelas", "Jhon Green", "2015")
// console.log(l.getTitulo)
// console.log(l.getAutor)
// l.setAno = "2018"


// testando a classe livro
const l2 = new Livro("Dom Casmurro", "Machado de Assis", "1850")
// console.log(l2.getTitulo)
// console.log(l2.getAutor)
// l.setAno = "1900"

// testando a classe usuario 1
const u1 = new Usuario("Camilla", 'cami.barros@gmail.com')
// console.log(u1.getNome) 
// console.log(u1.getEmail)
// u1.setEmail = "camillaerbarros@gmail.com" 

// testando a classe usuario 2
const u2 = new Usuario("Elizabeth", 'liz.barros@gmail.com')
// console.log(u2.getNome) 
// console.log(u2.getEmail)
// u1.setEmail = "lizrbarros@gmail.com" 

// usando a classe emprestimo
const emp1 = new Emprestimo(u1)
// console.log(emp1.getData)
// console.log(emp1.getUsuario)


// outro empréstimo
const emp2 = new Emprestimo(u2)
// console.log(emp2.getData)
// console.log(emp2.getUsuario)
emp2.pegarLivro(l2)
emp2.pegarLivro(l)
emp2.exibirDetalhes()

