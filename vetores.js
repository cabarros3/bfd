const entrada = require('prompt-sync')({ sigint: false })

// let nomes = []
// for(let i = 1; i <= 5; i++){
//     let nome = entrada('Digite seu nome: ')
//     nomes.push(nome)
// }
// console.log('Nomes digitados: ');
// for(let nome of nomes){
//     console.log(nome)
// }


// let numeros = []
// let soma = 0;
// for(let i = 1; i <= 4; i++){
//     let numero = Number(entrada("Digite um número: "))
//     numeros.push(numero)
// }

// for(let i = 0; i < numeros.length; i++){
//     soma += numeros[i]
// }

// console.log(soma)
// console.log(soma / numeros.length)


// nomes em ordem inversa

// let nomes = []
// for(let i = 1; i <=3; i++){
//     let nome= entrada("Digite um nome: ")
//     nomes.push(nome)
// }

// let invertidos = []
// for(let i = nomes.length; i >= 0; i--){
//     invertidos.push(nomes[i])
// }
// console.log(invertidos)



// encontrar o maior número

let numeros = []
let maior = 0
for(let i = 0; i <=5; i++){
    let numero = Number(entrada("Digite seu número: "))
    numeros.push(numero)
}

for(let i = 0; i <= numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
    }
}

console.log('O maior número é: ', maior)