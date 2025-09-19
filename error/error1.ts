// produto
class Produto {
  setPreco(valor: number): void {
    if (valor <= 0) {
      throw new Error("Valor inserido é inválido");
    }
    console.log(`Valor ${valor} foi inserido com sucesso`);
  }
}

try {
  const prod = new Produto();
  prod.setPreco(0);
} catch (erro) {
  console.log("erro: ", (erro as Error).message);
}
