// interface veiculo
interface Iveiculo{
    marca: string;
    modelo: string;
    ligar():void;
    desligar():void;
}

class Carro implements Iveiculo{
    constructor(public marca: string, public modelo: string){}

    ligar(): void {
        console.log(`O Carro da marca ${this.marca} e do modelo ${this.modelo} foi ligado`)
    }

    desligar(): void {
        console.log(`O carro foi desligado`)
    }
}

class Moto implements Iveiculo {
    constructor(public marca: string, public modelo: string){}

    ligar(): void {
        console.log(`A moto da marca ${this.marca} e do modelo ${this.modelo} foi ligada`)
    }

    desligar(): void {
        console.log("A moto foi desligada")
    }
}

let m1: Iveiculo = new Moto("Shineray", "Cinquentinha")
let ca1: Iveiculo = new Carro("Fiat", "Uno")

m1.ligar()
ca1.ligar()

ca1.desligar()
m1.desligar()