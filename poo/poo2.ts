class Produto{
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco
    }
}

class Pedido{
    listaDeProdutos: Produto[] = []

    // adicionar
    adicionarProdutos(produto: Produto): void{
        this.listaDeProdutos.push(produto)
        console.log(`O ${produto.nome} foi adiconado e seu valor é ${produto.preco}`)
    }

    // remover
    removerProduto(produto: Produto): void{
        for(let i: number = 0; i < this.listaDeProdutos.length; i++){
            if(this.listaDeProdutos[i].nome == produto.nome){
                this.listaDeProdutos.splice(i, 1) // estudar o método splice
                console.log(`O ${produto.nome} foi removido.`)
                break; // sai do loop após remover
            }
        }
    }

    // total
    calcularTotal(): number{
        let total: number = 0
        for(let i: number = 0; i < this.listaDeProdutos.length; i++){
            total += this.listaDeProdutos[i].preco
        }
        return total
    }
}

let p1 = new Produto("Coxinha", 10)
let p2 = new Produto("Coca-cola", 9.5)
let p3 = new Produto("jujuba", 0.5)
const pedido = new Pedido()
pedido.adicionarProdutos(p1)
pedido.adicionarProdutos(p2)
pedido.adicionarProdutos(p3)
console.log(pedido.calcularTotal())
pedido.removerProduto(p3)
console.log(pedido.calcularTotal())