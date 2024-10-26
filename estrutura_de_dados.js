let produtos = [];

console.log('\n-=-=-=-=-=-=-=-=-=-=- Sistema de Gerenciamento de Estoque -=-=-=-=-=-=-=-=-=-=-=-\n')

function cadastrar_produtos(id, nome, categoria, preco, quantidade, localizacao){
    let novo_produto = {
        id: id,
        nome: nome,
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        localizacao: localizacao
    }
    produtos.push(novo_produto)
    console.log(`Produto: ${nome} cadastrado com sucesso!`)
}

cadastrar_produtos(1, 'camisa azul', 'camisas', 19.90, 50, 'prateleira de cima')
cadastrar_produtos(2, 'camisa vermelha', 'camisas', 22.50, 40, 'prateleira de cima')
cadastrar_produtos(3, 'camisa amarela', 'camisas', 9.90, 20, 'prateleira de cima')
cadastrar_produtos(4, 'calça moletom', 'calças', 39.90, 34, 'prateleira de baixo')
cadastrar_produtos(5, 'calça jaens', 'calças', 69.90, 49, 'prateleira de baixo')
cadastrar_produtos(6, 'sapato masculino', 'sapatos', 79.90, 83, 'prateleira do meio')
cadastrar_produtos(7, 'sapato feminino', 'sapatos', 119.90, 27, 'prateleira do meio')
cadastrar_produtos(8, 'sapato infantil', 'sapatos', 89.90, 52, 'prateleira do meio')
cadastrar_produtos(9, 'bolsa faminina', 'bolsas', 69.90, 74, 'prateleira do lateral')
cadastrar_produtos(10, 'bolsa masculina', 'bolsas', 49.90, 36, 'prateleira do lateral')

function soma_total_estoque(){
    let total_quantidade = produtos.map(item => item.quantidade ) // Mostra a quantidade de cada item em estoque
    let soma_total_quantidade = total_quantidade.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) // Soma a quantidade total de itens em estoque
    let nome_dos_produtos = produtos.map(item => 'Produto: ' + item.nome) // Mostra o nome de cada produto em estoque
    
    
    console.log(`\nNo momento o estoque tem ${produtos.length} tipos de produtos cadastrados.\n--------------------------`)
    console.log(nome_dos_produtos.join("\n"))
    console.log(`--------------------------\nSomando o total de ${soma_total_quantidade} produtos.`)
}
soma_total_estoque()

// Aqui nos parâmetros ele buscara pelo nome de categoria
function busca_por_categoria(arg){

    let resultado = produtos.filter(item => item.categoria === arg)

    console.log(`\nBuscando por: ${arg}`)
    
    if(resultado.find(item => item.categoria === arg)){
        for(index of resultado){
            console.log(index)
        }
    } else {
        console.log('PRODUTO NÃO ENCONTRADO!')
    }
}
busca_por_categoria('touca')

function relatorio_de_estoque(arg){
    let total_de_itens = produtos.filter(item => item.categoria === arg).length; // Mostra o total de itens diferentes em estoque
    let relatorio = produtos.filter(item => item.categoria === arg) // Pega somente os itens da categoria escolhida
    let todos_nomes = produtos.map(item => item.nome) // Pega todos nomes de produtos em estoque
    let nome_dos_produtos = relatorio.map(item => item.nome + ' R$:' + item.preco+0 + '\n') // Mostra os nomes e preços dos produtos da mesma categoria escolhida
    
    let soma_quantidade_categoria = relatorio.map(item => item.quantidade) // Mostra a quantidade de produtos da categoria escolhida
    let soma_total_categoria = soma_quantidade_categoria.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) // Soma a quantidade por categoria escolhida

    if(relatorio.find(item => item.categoria === arg)){
        console.log(`\nEm estoque temos ${total_de_itens} tipos diferentes de ${arg}\nCom o total de ${soma_total_categoria} ${arg} em estoque\nQue são:`)
        console.log(nome_dos_produtos.join(""))
    } else {
        console.log('PRODUTO NÃO ENCONTRADO!')
    }
    
}
relatorio_de_estoque('touca')
