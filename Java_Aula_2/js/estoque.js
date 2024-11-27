let estoque = ['batata','banana']

function menu() {
    return parseInt(prompt(" [ 1 ] para listar os itens\n [ 2 ] para adicionar ao estoque\n [ 3 ] para remover do estoque\n [ 4 ] para encerrar "))
}
while(true){
    let op = menu()

    if(op == 1){

        alert(estoque.join('\n'))
        alert(`ha ${estoque.length} itens no estoque`)
        
    } else if (op === 2 ){

        add = prompt('coloque o nome do produto que voce queira adicionar')
        estoque.push(add)
        
    } else if (op === 3){

        del = parseInt(prompt('[ 1 ] para remover do começo\n[ 2 ] para remover do final'))

        if (del === 1)
            estoque.shift()

        else if (del === 2)
            estoque.pop()
        
    } else if (op === 4){
        
        break 
        
    } else {
        alert("COLOCA UMA VALOR VALIDO SEU ANIMAL")
    }
}
