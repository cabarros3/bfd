var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// criar classe produto
var Produto = /** @class */ (function () {
    function Produto(nome, codigo, preco, quantidade) {
        this.estoqueBaixo = false;
        this.nome = nome;
        this.codigo = codigo;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Object.defineProperty(Produto.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getCodigo", {
        get: function () {
            return this.codigo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getEstoqueBaixo", {
        get: function () {
            return this.estoqueBaixo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getQuantidade", {
        get: function () {
            return this.quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setQuantidade", {
        set: function (valor) {
            this.quantidade = valor;
        },
        enumerable: false,
        configurable: true
    });
    // adiciona um produto a quantidade original
    Produto.prototype.adicionarEstoque = function (qtd) {
        this.quantidade += qtd;
        // console.log(
        //   `A nova quantidade do produto ${this.nome} é ${this.quantidade}`
        // );
    };
    // remove produtos da quantidade original
    Produto.prototype.removerEstoque = function (qtd) {
        if (this.quantidade - qtd < 0) {
            console.log("Não é possível remover a quantidade do estoque. Não é permitido estoque negativo.");
        }
        else {
            this.quantidade -= qtd;
            // console.log(
            //   `A nova quantidade do produto ${this.nome} é ${this.quantidade}`
            // );
        }
    };
    // verifica se o estoque de um produto está baixo
    Produto.prototype.verficarEstoqueBaixo = function () {
        if (this.quantidade <= 5) {
            this.estoqueBaixo = true;
            console.log("\uD83D\uDEA8 Aten\u00E7\u00E3o! Estoque baixo.");
        }
    };
    return Produto;
}());
var Movimentacao = /** @class */ (function () {
    function Movimentacao(produto, quantidade) {
        this.data = new Date();
        this.produto = produto;
        this.quantidade = quantidade;
    }
    Object.defineProperty(Movimentacao.prototype, "getProduto", {
        get: function () {
            return this.produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movimentacao.prototype, "getQuantidade", {
        get: function () {
            return this.quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Movimentacao.prototype, "getData", {
        get: function () {
            return this.data;
        },
        enumerable: false,
        configurable: true
    });
    Movimentacao.prototype.registrar = function (estoque) { };
    return Movimentacao;
}());
var Entrada = /** @class */ (function (_super) {
    __extends(Entrada, _super);
    function Entrada() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Entrada.prototype.registrar = function (estoque) {
        this.getProduto.adicionarEstoque(this.getQuantidade);
        estoque.registrarMovimentacao(this); // não entendi esse this
        console.log("Entrada registrada de ".concat(this.getQuantidade, " para ").concat(this.getProduto.getNome));
    };
    return Entrada;
}(Movimentacao));
var Saida = /** @class */ (function (_super) {
    __extends(Saida, _super);
    function Saida() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Saida.prototype.registrar = function (estoque) {
        this.getProduto.removerEstoque(this.getQuantidade);
        estoque.registrarMovimentacao(this);
        console.log("Sa\u00EDda registrada de ".concat(this.getQuantidade, " para ").concat(this.getProduto.getNome));
    };
    return Saida;
}(Movimentacao));
var Estoque = /** @class */ (function () {
    function Estoque() {
        this.listaProdutos = [];
        this.listaMovimentacoes = [];
    }
    Object.defineProperty(Estoque.prototype, "getListaProdutos", {
        get: function () {
            return this.listaProdutos;
        },
        enumerable: false,
        configurable: true
    });
    // adiciona um produto ao estoque
    Estoque.prototype.adicionarProdruto = function (produto) {
        this.listaProdutos.push(produto);
    };
    Estoque.prototype.registrarMovimentacao = function (mov) {
        this.listaMovimentacoes.push(mov);
    };
    // lista todos os produtos cadastrados
    Estoque.prototype.listarProdutos = function () {
        console.log("========= Lista de todos os Produtos Cadastrados =======");
        for (var i = 0; i < this.listaProdutos.length; i++) {
            console.log("");
            console.log("C\u00F3digo: ".concat(this.listaProdutos[i].getCodigo));
            console.log("Nome: ".concat(this.listaProdutos[i].getNome));
            console.log("Pre\u00E7o: ".concat(this.listaProdutos[i].getPreco));
            console.log("Quantidade: ".concat(this.listaProdutos[i].getQuantidade));
            this.listaProdutos[i].verficarEstoqueBaixo();
            console.log("");
        }
        console.log("========================================================");
    };
    // busca um produto pelo título e mostra uma lista com os produtos de títulos iguais
    Estoque.prototype.pesquisarProduto = function (termoDeBusca) {
        var termosEncontrados = [];
        for (var i = 0; i < this.listaProdutos.length; i++) {
            if (this.listaProdutos[i].getNome == termoDeBusca) {
                termosEncontrados.push(this.listaProdutos[i]);
            }
        }
        if (termosEncontrados.length > 0) {
            console.log("========= Produto(s) Encontrado(s) ==========");
            for (var i = 0; i < termosEncontrados.length; i++) {
                console.log("Produto: ".concat(termosEncontrados[i].getCodigo));
                console.log("Nome: ".concat(termosEncontrados[i].getNome));
                console.log("Pre\u00E7o: ".concat(termosEncontrados[i].getPreco));
                console.log("Quantidade: ".concat(termosEncontrados[i].getQuantidade));
                termosEncontrados[i].verficarEstoqueBaixo();
                console.log("");
            }
            console.log("=============================================");
        }
        else {
            console.log("Nenhum produto foi encontrado com esse termo");
        }
    };
    // calcula o total dos produtos (preço * quantidade)
    Estoque.prototype.calcularValorTotal = function () {
        var calculaTotal = 0;
        for (var i = 0; i < this.listaProdutos.length; i++) {
            calculaTotal +=
                this.listaProdutos[i].getPreco * this.listaProdutos[i].getQuantidade;
        }
        console.log("O valor total do estoque \u00E9 R$ ".concat(calculaTotal));
    };
    // mostra apenas os produtos com estoque baixo
    Estoque.prototype.mostrarProdutosEstoqueBaixo = function () {
        var estoqueBaixo = [];
        for (var i = 0; i < this.listaProdutos.length; i++) {
            this.listaProdutos[i].verficarEstoqueBaixo();
            if (this.listaProdutos[i].getEstoqueBaixo == true) {
                estoqueBaixo.push(this.listaProdutos[i]);
            }
        }
        for (var i = 0; i < estoqueBaixo.length; i++) {
            console.log("");
            console.log("C\u00F3digo: ".concat(this.listaProdutos[i].getCodigo));
            console.log("Nome: ".concat(this.listaProdutos[i].getNome));
            console.log("Pre\u00E7o: ".concat(this.listaProdutos[i].getPreco));
            console.log("Quantidade: ".concat(this.listaProdutos[i].getQuantidade));
            console.log("");
        }
    };
    return Estoque;
}());
// criar produtos
var p = new Produto("Feijão", "F1", 10.5, 10);
var p0 = new Produto("Feijão", "F12", 15.5, 5);
var p1 = new Produto("Arroz", "A1", 8.0, 12);
// criar estoque
var e = new Estoque();
// adicionar produto
e.adicionarProdruto(p);
e.adicionarProdruto(p1);
e.adicionarProdruto(p0);
// movimentação
var entrada = new Entrada(p, 10);
entrada.registrar(e);
var saida = new Saida(p, 5);
saida.registrar(e);
// const entrada2 = new Entrada(p0, 10);
// entrada2.registrar(e);
// const entrada3 = new Entrada(p1, 5);
// entrada3.registrar(e);
e.registrarMovimentacao(entrada);
// e.listarProdutos();
// e.calcularValorTotal();
// e.mostrarProdutosEstoqueBaixo();
