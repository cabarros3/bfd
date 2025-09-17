// carro
class Carro{
    private velociade: number = 0;

    get getVelociade(){
        return this.velociade;
    }

    // apenas para declarar um nova velocidade
    set setVelocidade(v: number){
        if(v < 0){
            console.log("Insira uma valocidade válida")
            return
        }
        this.velociade = v
    }

    acelerar(vel: number): void{
        if(this.velociade + vel > 200){
            console.log("Valor de aceleração inválida")
        }
        console.log(`acelerando a velocidade de ${this.velociade} para ${this.velociade + vel}`)
        this.velociade += vel
    }

    frear(vel: number): void{
        if(this.velociade - vel < 0){
            console.log("Não é possível diminuir a velocidade abaixo de 0")
            return
        }
        console.log(`Diminuindo a velocidade de ${this.velociade} para ${this.velociade - vel}`)
        this.velociade -= vel
    }

}

const c1 = new Carro()
console.log(c1.getVelociade)
c1.setVelocidade = 50
console.log(c1.getVelociade)
c1.acelerar(30)
console.log(c1.getVelociade)
c1.frear(20)
