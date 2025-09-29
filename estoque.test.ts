import { Produto } from "../src/produto";
import { Estoque } from "../src/estoque";

describe("Teste da classe Estoque", ()=>{
    test("Deve adicionar Produto ao estoque corretamente", ()=>{
        const p = new Produto("Caneta", "001", 2.5, 10)
        const e = new Estoque()

        e.adicionarProduto(p)

        expect(e.getListaProdutos()).toContain(p)

    })

    test("Deve registrar a entrada de produtos corretamente", ()=>{
       const p = new Produto("Caneta", "001", 2.5, 10)
       const e = new Estoque()

       e.adicionarProduto(p)
       p.adicionarEstoque(5)
       
       const entrada = new Entrada()
    })
})