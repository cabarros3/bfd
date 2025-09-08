class Livro{
    titulo: string; 
    autor: string;
    paginas: number;

    constructor(titulo: string, autor: string, paginas: number){
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }
}

class Biblioteca{
    listaDeLivros: Livro[] = []

    // adicionar
    adicionarLivro(livro: Livro): void{
        this.listaDeLivros.push(livro)
        console.log(`O ${livro.titulo} foi adicionado`)
    }

    // buscar
    buscarLivro(livro: string): void{
        for(let i: number = 0; i < this.listaDeLivros.length; i++){
            if(this.listaDeLivros[i].titulo === livro){
                console.log(`O livro ${this.listaDeLivros[i].titulo} foi encontrado. Informações sobre ele: \n Autor: ${this.listaDeLivros[i].autor} \n Páginas: ${this.listaDeLivros[i].paginas}`)
                break;
            }
        }
    }
}

let l1 = new Livro("O morro dos ventos uivantes", "Fulana", 120)
let l2 = new Livro("A culpa é das estrelas", "Jhon Green", 300)
let l3 = new Livro("Crepúsculo", "Fulana Meyer", 400)
const lib = new Biblioteca()

lib.adicionarLivro(l1)
lib.adicionarLivro(l2)
lib.adicionarLivro(l3)

lib.buscarLivro("Crepúsculo")