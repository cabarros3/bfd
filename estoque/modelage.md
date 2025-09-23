## Modelagem de classes

### classe Prodruto

- nome
- código
- preco
- quantidadeInicial

### classe abstrata Movimentacao

- produtoCodigo
- data
- quantidade
- executar(): void

### classe entrada herda de Movimentação

- executar(): void

### classe saida herda de Movimentação

- executar(): void

### classe Estoque

- listaProdutos (privado)
- listaMovimentacoes (privado)
- adicionaProduto()
- registraMovimentacao()
- consultaProdutos()
- relatorio()
- calculaTotal()
- estoqueBaixo()
