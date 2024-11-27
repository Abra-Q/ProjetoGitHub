let display = document.querySelector("#display")
let num1 = ''
let num2 = ''
let operador = ''
let valor = 1

function clicked(button){
    switch (button){

        case 'c':

            reset()
            break

        case '/':
        case '*':
        case '-':
        case '+':
            if(num1 !== '' ){
                operador = button
                valor = 2
            }

            break

        case '.':
            if (valor === 1 && num1 !== '' && !num1.includes('.')){
                num1+='.'
            }

            if (valor === 2 && num2 !== '' && ! num2.includes('.')){
                num2+='.'
            }

            break

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if(valor === 1){
                num1 += button
            }

            if(valor === 2){
                num2 += button
            }

            break

        case '=':
            if(valor === 2 && num2 !== '') {
                let result = calculo(num1, num2, operador)
                reset()
                num1 = result
            }
            break
    }

    atualizar()

}

function atualizar(){
    if (num1 === ''){
        display.innerHTML = '0'

    } else {
        display.innerHTML = num1 + operador + num2
    }
}

function calculo(n1, n2, op){
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)

    switch(op){
        case '/':
            return n1 / n2
        case '*':
            return n1 * n2
        case '-':
            return n1 - n2
        case '+':
            return n1 + n2

        default:
            return 0
    }

}

function reset(){
    num1 = ''
    num2 = ''
    operador = ''
    valor = 1
}
