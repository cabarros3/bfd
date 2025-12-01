const express = require("express");

const app = express();

app.use(express.json());

// rota dos alunos
const alunosRoutes = require("./routes/alunosRoutes")
app.use("/alunos", alunosRoutes)

// rota dos cursos
const cursosRoutes = require("./routes/cursosRoutes")
app.use("/cursos", cursosRoutes)

//rota simples
app.get("/", (req, res) => {
    res.json({mensagem: 'API com Express Funcionando!'})
});

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor rodando em https://localhost:${PORTA}`);
})

