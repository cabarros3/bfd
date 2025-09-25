// criar classe produto
class Produto {
  private nome: string;
  private codigo: string;
  private preco: number;
  private estoqueBaixo: boolean = false;
  private quantidade: number;

  constructor(nome: string, codigo: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.codigo = codigo;
    this.preco = preco;
    this.quantidade = quantidade;
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

  get getEstoqueBaixo() {
    return this.estoqueBaixo;
  }

  get getQuantidade() {
    return this.quantidade;
  }

  set setQuantidade(valor: number) {
    this.quantidade = valor;
  }

  // adiciona um produto a quantidade original
  adicionarEstoque(qtd: number): void {
    this.quantidade += qtd;
    // console.log(
    //   `A nova quantidade do produto ${this.nome} é ${this.quantidade}`
    // );
  }

  // remove produtos da quantidade original
  removerEstoque(qtd: number): void {
    if (this.quantidade - qtd < 0) {
      console.log(
        "Não é possível remover a quantidade do estoque. Não é permitido estoque negativo."
      );
    } else {
      this.quantidade -= qtd;
      // console.log(
      //   `A nova quantidade do produto ${this.nome} é ${this.quantidade}`
      // );
    }
  }

  // verifica se o estoque de um produto está baixo
  public verficarEstoqueBaixo() {
    if (this.quantidade <= 5) {
      this.estoqueBaixo = true;
      console.log(`🚨 Atenção! Estoque baixo.`);
    }
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

  registrar(estoque: Estoque): void {}
}

class Entrada extends Movimentacao {
  registrar(estoque: Estoque): void {
    this.getProduto.adicionarEstoque(this.getQuantidade);
    estoque.registrarMovimentacao(this); // não entendi esse this
    console.log(
      `Entrada registrada de ${this.getQuantidade} para ${this.getProduto.getNome}`
    );
  }
}

class Saida extends Movimentacao {
  registrar(estoque: Estoque): void {
    this.getProduto.removerEstoque(this.getQuantidade);
    estoque.registrarMovimentacao(this);
    console.log(
      `Saída registrada de ${this.getQuantidade} para ${this.getProduto.getNome}`
    );
  }
}

class Estoque {
  private listaProdutos: Produto[] = [];
  private listaMovimentacoes: Movimentacao[] = [];

  get getListaProdutos() {
    return this.listaProdutos;
  }

  // adiciona um produto ao estoque
  adicionarProdruto(produto: Produto): void {
    this.listaProdutos.push(produto);
  }

  registrarMovimentacao(mov: Movimentacao) {
    this.listaMovimentacoes.push(mov);
  }

  // lista todos os produtos cadastrados
  listarProdutos(): void {
    console.log("========= Lista de todos os Produtos Cadastrados =======");
    for (let i: number = 0; i < this.listaProdutos.length; i++) {
      console.log("");
      console.log(`Código: ${this.listaProdutos[i].getCodigo}`);
      console.log(`Nome: ${this.listaProdutos[i].getNome}`);
      console.log(`Preço: ${this.listaProdutos[i].getPreco}`);
      console.log(`Quantidade: ${this.listaProdutos[i].getQuantidade}`);
      this.listaProdutos[i].verficarEstoqueBaixo();
      console.log("");
    }
    console.log("========================================================");
  }

  // busca um produto pelo título e mostra uma lista com os produtos de títulos iguais
  pesquisarProduto(termoDeBusca: string): void {
    const termosEncontrados: Produto[] = [];
    for (let i: number = 0; i < this.listaProdutos.length; i++) {
      if (this.listaProdutos[i].getNome == termoDeBusca) {
        termosEncontrados.push(this.listaProdutos[i]);
      }
    }

    if (termosEncontrados.length > 0) {
      console.log("========= Produto(s) Encontrado(s) ==========");
      for (let i: number = 0; i < termosEncontrados.length; i++) {
        console.log(`Produto: ${termosEncontrados[i].getCodigo}`);
        console.log(`Nome: ${termosEncontrados[i].getNome}`);
        console.log(`Preço: ${termosEncontrados[i].getPreco}`);
        console.log(`Quantidade: ${termosEncontrados[i].getQuantidade}`);
        termosEncontrados[i].verficarEstoqueBaixo();
        console.log("");
      }
      console.log("=============================================");
    } else {
      console.log("Nenhum produto foi encontrado com esse termo");
    }
  }

  // calcula o total dos produtos (preço * quantidade)
  calcularValorTotal(): void {
    let calculaTotal = 0;
    for (let i: number = 0; i < this.listaProdutos.length; i++) {
      calculaTotal +=
        this.listaProdutos[i].getPreco * this.listaProdutos[i].getQuantidade;
    }
    console.log(`O valor total do estoque é R$ ${calculaTotal}`);
  }

  // mostra apenas os produtos com estoque baixo
  mostrarProdutosEstoqueBaixo() {
    const estoqueBaixo: Produto[] = [];
    for (let i: number = 0; i < this.listaProdutos.length; i++) {
      this.listaProdutos[i].verficarEstoqueBaixo();
      if (this.listaProdutos[i].getEstoqueBaixo == true) {
        estoqueBaixo.push(this.listaProdutos[i]);
      }
    }

    for (let i: number = 0; i < estoqueBaixo.length; i++) {
      console.log("");
      console.log(`Código: ${this.listaProdutos[i].getCodigo}`);
      console.log(`Nome: ${this.listaProdutos[i].getNome}`);
      console.log(`Preço: ${this.listaProdutos[i].getPreco}`);
      console.log(`Quantidade: ${this.listaProdutos[i].getQuantidade}`);
      console.log("");
    }
  }
}

// criar produtos
const p = new Produto("Feijão", "F1", 10.5, 10);
const p0 = new Produto("Feijão", "F12", 15.5, 5);
const p1 = new Produto("Arroz", "A1", 8.0, 12);

// criar estoque
const e = new Estoque();

// adicionar produto
e.adicionarProdruto(p);
e.adicionarProdruto(p1);
e.adicionarProdruto(p0);

// movimentação
const entrada = new Entrada(p, 10);
entrada.registrar(e);
const saida = new Saida(p, 5);
saida.registrar(e);
// const entrada2 = new Entrada(p0, 10);
// entrada2.registrar(e);
// const entrada3 = new Entrada(p1, 5);
// entrada3.registrar(e);

e.registrarMovimentacao(entrada);

// e.listarProdutos();
// e.calcularValorTotal();
// e.mostrarProdutosEstoqueBaixo();
