const entrada = require('prompt-sync')({ sigint: false })

console.log('Olá, eu sou uma calculadora!!')
let n1 = Number(entrada("Digite o primeiro número: "))
let n2 = Number(entrada("Digite o segundo número: "))
console.log('Digite para escolher uma das opções abaixo e defina a operação a ser feita: ')
console.log('1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão')
let operação = entrada("")


function calculadora(n1, n2, operação){
    if(!n1 && !n2){
        return 0
    }

    switch (operação){
        case "1":
            return n1 + n2;
            break;
        case "2":
            return n1 - n2;
            break;
        case "3":
            return n1 * n2;
            break
        case "4":
            return n1 / n2
            break;
        default:
            return 0
    }
}

console.log(calculadora(n1, n2, operação))