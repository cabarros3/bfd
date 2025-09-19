// atividade 1

class Funcionario{
    readonly id: string;
    public nome: string;
    private salario: number;

    constructor(id: string, nome: string, salario: number){
        this.id = id
        this.nome = nome;
        this.salario = salario
    }

    // aumentar salario
    aumentarSalario(valor: number): number{
        return this.salario += valor // se o aumento já for o valor final em dinheiro, se for porcentagem tem que calcular
    }

    // exibir funcionário
    exibirFuncionario(): void{
         console.log(`Funcionário: ${this.nome} \nSalário: ${this.salario}`)
    }
}

let f1 = new Funcionario("1","Camilla", 1500)
let f2 = new Funcionario("2","Vitor", 1600)
console.log("=================================")
f1.aumentarSalario(400)
f1.exibirFuncionario()
console.log("=================================")
f2.exibirFuncionario()
console.log("=================================")