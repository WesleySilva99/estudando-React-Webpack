const produto = {
    nome: "Biscoito Maria",
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    return { ...objeto }
}

const novoProduto = clone(produto)

novoProduto.nome = 'Biscoito maizena'

console.log(produto, novoProduto)