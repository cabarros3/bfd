import { Produto } from "../src/produto.js";

describe("Teste da classe Produto", () => {
  test("Deve adicionar estoque corretamente", () => {
    // arange: criar um produto com quantidade inicial de 10
    const p = new Produto("Caneta", "001", 2.5, 10);

    // act: adicionar 5 unidades
    p.adicionarEstoque(5);

    // assert: verificar se a quantidade é 15
    expect(p.getQuantidade()).toBe(15);
  });

  test("Deve lançar erro ao adicionar quantidade inválida", () => {
    const p = new Produto("Caneta", "001", 2.5, 10);

    expect(() => p.adicionarEstoque(-5)).toThrow("Quantidade Inválida");
  });

  test("Deve remover estoque corretamente", () => {
    const p = new Produto("Caneta", "001", 2.5, 10);

    p.removerEstoque(3);

    expect(p.getQuantidade()).toBe(7);
  });

  test("Deve lançar erro ao tentar remover mais do que o disponível", () => {
    const p = new Produto("Caneta", "001", 2.5, 10);
    expect(() => p.removerEstoque(11)).toThrow("Estoque insuficiente");
  });
});
