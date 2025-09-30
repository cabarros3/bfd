import { Produto } from "./produto";


abstract class Movimentacao {
  protected produto: Produto;
  protected quantidade: number;
  protected data: Date = new Date();

  constructor(produto: Produto, quantidade: number) {
    this.produto = produto;
    this.quantidade = quantidade;
  }

  get getProduto(): Produto {
    return this.produto;
  }

  get getQuantidade() {
    return this.quantidade;
  }

  get getData() {
    return this.data;
  }

  registrar(estoque: Estoque): void {}
}

class Entrada extends Movimentacao {
  registrar(estoque: Estoque): void {
    this.getProduto.adicionarEstoque(this.getQuantidade);
    estoque.registrarEntrada(this); // esse this se refere a instância
    console.log(`Entrada registrada com sucesso`);
  }
}

// classe concreta
class Saida extends Movimentacao {
  registrar(estoque: Estoque): void {
    try {
      this.getProduto.removerEstoque(this.getQuantidade);
      estoque.registrarSaida(this);
    } catch (erro) {
      if (erro instanceof Error) {
        console.error("Falha ao remover estoque:", erro.message);
      }
    }
  }
}

export class Estoque{
    private listaProdutos: Produto[] = []
    private registraSaida: Movimentacao[] = []
    private registraEntrada: Movimentacao[] = []

    getListaProdutos(){
      return this.listaProdutos
    }

    
    adicionarProduto(produto: Produto): void{
        this.listaProdutos.push(produto)
    }   

    registrarEntrada(mov: Movimentacao): void{
        this.registraEntrada.push(mov)
    }

    registrarSaida(mov: Movimentacao): void{
        this.registraSaida.push(mov)
    }

}