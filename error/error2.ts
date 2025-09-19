class Pedido {
  public listaPedido: string[] = [];

  adicionar(nomeProduto: string) {
    this.listaPedido.push(nomeProduto);
  }

  finalizar() {
    if (this.listaPedido.length == 0) {
      throw new Error("Pedido não possui itens, logo, não pode ser finalizado");
    }
    console.log("Pedido finalizado");
    for (let i: number = 0; i < this.listaPedido.length; i++) {
      console.log(`Produto: ${this.listaPedido[i]}`);
    }
  }
}

try {
  const p = new Pedido();
  p.adicionar("Sabonete");
  p.adicionar("Perfume");
  p.adicionar("Água");
  p.finalizar();
} catch (erro) {
  console.log("erro: ", (erro as Error).message);
}
