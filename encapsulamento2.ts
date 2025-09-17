// aluno
class Aluno {
    private nota: number = 0

    get getNota(){
        return this.nota;
    }

    set setNota(n: number){
        if(n < 0){
            console.log("Insira um valor válido para a nota")
            return;
        }
        this.nota = n
    }
}

const a = new Aluno()
console.log(a.getNota)
a.setNota = 8.0
console.log(a.getNota)