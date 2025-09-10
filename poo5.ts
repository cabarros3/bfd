// cliente

class Cliente{
    readonly cpf: string;
    nome: string;
    private senha: string;

    constructor(cpf: string, nome: string, senha: string){
        this.cpf = cpf
        this.nome = nome
        this.senha = senha
    }

    //valirda senha
    validarSenha(s: string): boolean{
        if(this.senha === s){
            return true
        }

        return false
    }

}

let c1 = new Cliente('000000000000', "Camilla", "1234c")
console.log(c1.validarSenha('1234c'))