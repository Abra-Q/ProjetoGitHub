while(true){

    let op = parseInt(prompt("Digite 0 para encerrar o programa\nDigite 1 para continuar o programa"))

    if (op === 0 ){
        console.log("Você decidiu encerrar o programa")
        break

    } else if (op === 1){

        let menu = parseInt(prompt("1 para SOMA\n2 para SUBTRAÇÃO\n3 para MULTIPLICAÇÃO\n4 para DIVISÃO\n5 para ELEVAÇÃO\n6 para sair"))
        let n1 = parseFloat(prompt("escolha um numero para sua operação"))
        let n2 = parseFloat(prompt("escolha um outro numero para sua operação"))

        switch(menu){
            case 1:
                alert(`a soma de ${n1} + ${n2} é igual a ${soma(n1,n2)}`)
                break
            case 2:
                alert(`a subitração de ${n1} - ${n2} é igual a ${subitracao(n1,n2)}`)
                break
            case 3:
                alert(`a multiplicação de ${n1} * ${n2} é igual a ${multiplicacao(n1,n2)}`)
                break
            case 4:
                alert(`a divisão de ${n1} / ${n2} é igual a ${divisao(n1,n2)}`)
                break
            case 5:
                alert(`a elevação de ${n1} ** ${n2} é igual a ${elevado(n1,n2)}`)
                break
        }
    }else{
        alert("DIGITE UM VALOR VALIDO SEU JUMENTO")
    }
}

function soma(n1, n2) {
    let resultado = n1 + n2
    return resultado
}
function subitracao(n1, n2) {
    let resultado = n1 + n2
    return resultado
}
function multiplicacao(n1, n2){
    let resultado = n1 * n2
    return resultado
}
function divisao(n1, n2){
    let resultado = n1 / n2
    return resultado
}
function elevado(n1, n2){
    let resultado = n1 ** n2
    return resultado
}
