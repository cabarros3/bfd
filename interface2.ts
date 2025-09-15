interface IAparelho{
    marca: string;
    modelo: string;
    polegadas?: number;
    ligar(): void;
    desligar(): void;
}

class Televisao implements IAparelho{
    constructor(public marca: string, public modelo: string, public polegadas: number){}

    ligar(): void {
        console.log(`A tv da marca ${this.marca} do modelo ${this.modelo} de ${this.polegadas} polegadas foi ligada`)
    }

    desligar(): void {
        console.log('A tv foi desligada')
    }
}

class Celular implements IAparelho{
    constructor(public marca: string, public modelo: string){}

    ligar(): void {
        console.log(`O smartphone da marca ${this.marca} do modelo ${this.modelo} foi ligado`)
    }

    desligar(): void {
        console.log("O Smartphone foi desligado")
    }
}


let tv: IAparelho = new Televisao("Samsung", "TV5060", 32)
let smartphone: IAparelho = new Celular("Iphone", "17")

tv.ligar();
smartphone.ligar()

smartphone.desligar()
tv.desligar()