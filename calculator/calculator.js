const entrada = require("prompt-sync")({ sigint: false });

console.log("====================================");
console.log("   🧮 Bem-vindo à Calculadora! 🧮   ");
console.log("====================================\n");

// Função para pedir número válido
function pedirNumero(mensagem) {
  let valor;
  do {
    valor = Number(entrada(mensagem));
    if (isNaN(valor)) {
      console.log("❌ Entrada inválida. Digite apenas números!\n");
    }
  } while (isNaN(valor));
  return valor;
}

let n1 = pedirNumero("➡️  Digite o primeiro número: ");
let n2 = pedirNumero("➡️  Digite o segundo número: ");

console.log("\n📌 Escolha a operação:");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");

let operacao = entrada("➡️  Digite o número da operação desejada: ");

function calculadora(n1, n2, operacao) {
  switch (operacao) {
    case "1":
      return n1 + n2;
    case "2":
      return n1 - n2;
    case "3":
      return n1 * n2;
    case "4":
      if (n2 === 0) return "❌ Erro: Divisão por zero não é permitida!";
      return n1 / n2;
    default:
      return "❌ Operação inválida. Escolha entre 1 e 4.";
  }
}

console.log(`\n✅ Resultado: ${calculadora(n1, n2, operacao).toFixed(2)}`);
