const express = require("express");

const app = express();

app.use(express.json());

const livrosRoutes = require("./routes/livrosRoutes");
app.use("/livros", livrosRoutes)

app.get("/", (req, res) => {
    res.json({mensagem: "API está funcionando!!"})
})

const PORTA = 3000;

app.listen(PORTA, () =>{
    console.log(`Servidor rodando em http://localhost:3${PORTA}`)
})