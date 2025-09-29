export class Produto{
    private quantidade: number;
    constructor(public nome: string, public codigo: string, public preco: number, quantidadeInicial: number){
        this.quantidade = quantidadeInicial
    }

    adicionarEstoque(qtd: number): void{
        if(qtd <= 0){
            throw new Error("Quantidade Inválida")
        }
        this.quantidade += qtd
    }

    removerEstoque(qtd: number): void{
        if(qtd >  this.quantidade){
            throw new Error("Estoque insuficiente")
        }
        this.quantidade -= qtd
    }

    getQuantidade(): number{
        return this.quantidade
    }
}