class Veiculo{
    marca: string;
    modelo: string;
    ano: number;
    private placa: string

    constructor(marca: string, modelo: string, ano: number, placa: string){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.placa = placa
    }

    //exibir dados
    exibirDados(): void{
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo} \nAno: ${this.ano} \nPlaca: ${this.placa}`)
    }
}

let v1 = new Veiculo("Fiat", "Uno", 1996, "ABC1D3R")
v1.exibirDados()