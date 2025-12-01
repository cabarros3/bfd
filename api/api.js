const http = require("http");

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    const resposta = {
        mensagem: "Servidor Node.js funcionando!",
        data: new Date().toLocaleDateString()
    };

    res.end(JSON.stringify(resposta));
});

const PORTA = 3000;

servidor.listen(PORTA, () =>{
    console.log(`Servidor ativo em http://localhost:${PORTA}`)
});