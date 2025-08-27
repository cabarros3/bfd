/*
  - Calculadora no terminal
  - essa atividade consistem em fazer uma calculadora com 4 funções: soma, subtração, multiplicação e divisão
  - Deve perguntar ao usuários os números que dejesa calcular e a operação que pretende fazer
  - também deve perguntar a cada finalização/mostra de resultado se deseja fazer outra operação e repete o processo
  - se responder que não quer continuar, o sistema encerra a calculadora
*/

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

// Função principal da calculadora usando switch
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

// Loop principal da calculadora
let continuar = "s";
while (continuar.toLowerCase() === "s") {
  let n1 = pedirNumero("➡️  Digite o primeiro número: ");
  let n2 = pedirNumero("➡️  Digite o segundo número: ");

  console.log("\n📌 Escolha a operação:");
  console.log("1 - Soma");
  console.log("2 - Subtração");
  console.log("3 - Multiplicação");
  console.log("4 - Divisão");

  let operacao = entrada("➡️  Digite o número da operação desejada: ");

  let resultado = calculadora(n1, n2, operacao);

  // Se for número, formata com 2 casas decimais
  if (typeof resultado === "number") {
    console.log(`\n✅ Resultado: ${resultado.toFixed(2)}`);
  } else {
    console.log(`\n${resultado}`);
  }

  continuar = entrada("\n🔄 Deseja fazer outro cálculo? (s/n): ");
}

console.log("\n👋 Calculadora encerrada. Até a próxima!");
