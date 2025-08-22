const entrada = require("prompt-sync")({ sigint: false });

console.log("====================================");
console.log("   🧮 Bem-vindo à Calculadora! 🧮   ");
console.log("====================================\n");

let n1 = Number(entrada("➡️  Digite o primeiro número: "));
let n2 = Number(entrada("➡️  Digite o segundo número: "));

if (isNaN(n1) || isNaN(n2)) {
  console.log("❌ Erro: Você deve digitar apenas números.");
  process.exit(1);
}

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

console.log(`\n✅ Resultado: ${calculadora(n1, n2, operacao)}`);
