var Pedido = /** @class */ (function () {
    function Pedido() {
        this.listaPedido = [];
    }
    Pedido.prototype.adicionar = function (nomeProduto) {
        this.listaPedido.push(nomeProduto);
    };
    Pedido.prototype.finalizar = function () {
        if (this.listaPedido.length == 0) {
            throw new Error("Pedido não possui itens, logo, não pode ser finalizado");
        }
        console.log("Pedido finalizado");
        for (var i = 0; i < this.listaPedido.length; i++) {
            console.log("Produto: ".concat(this.listaPedido[i]));
        }
    };
    return Pedido;
}());
try {
    var p = new Pedido();
    p.adicionar("Sabonete");
    p.adicionar("Perfume");
    p.adicionar("Água");
    p.finalizar();
}
catch (erro) {
    console.log("erro: ", erro.message);
}
