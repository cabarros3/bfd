// criar classe produto
class Produto {
  private nome: string;
  private codigo: string;
  private preco: number;
  private quantidadeInicial: number;

  constructor(
    nome: string,
    codigo: string,
    preco: number,
    quantidadeInicial: number
  ) {
    this.nome = nome;
    this.codigo = codigo;
    this.preco = preco;
    this.quantidadeInicial = quantidadeInicial;
  }

  get getNome() {
    return this.nome;
  }

  get getCodigo() {
    return this.codigo;
  }

  get getPreco() {
    return this.preco;
  }

  get getQuantidadeInicial() {
    return this.quantidadeInicial;
  }
}

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

  executar(estoque: Estoque): void {}
}

class entrada extends Movimentacao {
  executar(estoque: Estoque): void {
    this.quantidade;
  }
}

class Estoque {}
