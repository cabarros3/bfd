abstract class Animal{
    nome: string

    constructor(nome: string){
        this.nome = nome
    }

    abstract emitirSom():void;

    apresentar(): void{
        console.log(`Oi, sou ${this.nome}`)
    }
}

class Gato extends Animal{
    cor: string

    constructor(nome: string, cor: string){
        super(nome)
        this.cor = cor
    }

    emitirSom(): void {
        console.log("Miau Miau")
    }

    apresentarCor(){
        console.log(`Sou um(a) gatinho(a) ${this.cor}`)
    }
}

class Cachorro extends Animal{
    raca: string

    constructor(nome: string, raca: string){
        super(nome)
        this.raca = raca
    }

    emitirSom(): void {
        console.log("Au Au")
    }

    apresentarRaca(){
        console.log(`Sou um cachorrinho da raca ${this.raca}`)
    }
}

let g1 = new Gato("Sopinha", "Preto e branco")
console.log("=======================")
g1.apresentar()
g1.emitirSom()
g1.apresentarCor()
console.log("=======================")
let c1 = new Cachorro("Amendoin", "Caramelo")
c1.apresentar()
c1.emitirSom()
c1.apresentarRaca()
console.log("=======================")