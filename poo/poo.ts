
class Aluno{
    nome: string;
    matricula: string;

    constructor(nome: string, matricula: string){
        this.nome = nome;
        this.matricula = matricula
    }
}


class Turma{
    alunos: Aluno[] = []

    // adicinar aluno
    adicionarAluno(aluno: Aluno): void{
        this.alunos.push(aluno)
        console.log(`O aluno(a) ${aluno.nome} com matrícula ${aluno.matricula} foi adicionado`)
    }

    // listar alunos
    listarAlunos(): void{
        console.log("Lista de alunos matriculados")
        for(let i: number = 0; i < this.alunos.length; i++){
            console.log(`Nome: ${this.alunos[i].nome}, Matrícula: ${this.alunos[i].matricula} \n`)
        }
    }
}

// instâncias
const student1 = new Aluno("Camilla", "TSI0033");
const student2 = new Aluno("João Vitor", "TSI0034");
const classRoom = new Turma()
classRoom.adicionarAluno(student1);
classRoom.adicionarAluno(student2);
classRoom.listarAlunos()