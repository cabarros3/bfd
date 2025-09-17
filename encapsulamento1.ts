// funcionário
class Funcionario {
    public nome: string;
    private salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome
        this.salario = salario
    }

    get getSalario(){
        return this.salario;
    }

    set setSalario(valor: number){
        if(valor < 1518){
            console.log("Insira um valor de salário válido")
            return;
        }
        this.salario = valor
    }

    exibirDados(): void{
        console.log(`Funcionário: ${this.nome}`)
        console.log(`Salário: ${this.salario}`)
    }
}

const func = new Funcionario("Camilla", 1528)
console.log(func.getSalario)
func.setSalario = 1600
func.exibirDados()
func.setSalario = 1400
console.log(func.getSalario)