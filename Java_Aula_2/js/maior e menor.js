let opcoes = parseFloat(prompt(`coloque um numero entre\n 1 para MAIOR MENOR \n 2 para MEDIA \n 3 para CONVERSÃO \n 4 para REPETIÇÃO \n 5 para TABUADA \n 6 CALCULADORA`))
switch (opcoes){
    case 1:
        let nume1 = parseFloat(prompt('Coloque o primeiro número '))
        let nume2 = parseFloat(prompt('Coloque o segundo número '))

        if (nume1 > nume2) {
            console.log(`${nume1} é maior que o numero ${nume2}`)
        } 
        else if (nume1 < nume2){
            console.log(`${nume1} é menor que o numero ${nume2}`)
        }
        else {
            console.log(`o numero ${nume1} e o numero ${nume2} são iguais`)
        }
        break
    case 2:
        let num1 = parseFloat(prompt('Coloque a primeira nota'))
        let num2 = parseFloat(prompt('Coloque a segunda nota'))
        let num3 = parseFloat(prompt('Coloque a terceira nota'))
        let num4 = parseFloat(prompt('Coloque a quarta nota '))

        let media = (num1+num2+num3+num4)/4

        if (media >= 7){
            console.log(`sua media foi ${media} você esta APROVADO`)
        }
        else if (media <= 2){
            console.log(`sua media foi ${media} você esta RECUPERADO`)
        }
        else {
            console.log(`sua media foi ${media} você esta em RECUPERAÇÃO`)
        }
        break
    case 3:
        let conversao = parseFloat(prompt(`coloque um numero entre\n 1 para mm\n 2 para cm\n 3 para dm\n4 para dam\n5 para hm\n6 para km`))
        let metros = parseFloat(prompt(`digite o valor em metros para a conversão`))

        switch (conversao) {
            case 1:
                let mm = metros*1000
                console.log(`${metros} metros é igual á ${mm} Millimetros`)
                break

            case 2:
                let cm = metros*100
                console.log(`${metros} metros é igual á ${cm} Centímetros`)
                break

            case 3:
                let dm = metros*10
                console.log(`${metros} metros é igual á ${dm} Decímetros`)
                break

            case 4:
                let dam = metros/10
                console.log(`${metros} metros é igual á ${dam} Decâmetro`)
                break

            case 5:
                let hm = metros/100
                console.log(`${metros} metros é igual á ${hm} hectômetro`)
                break

            case 6:
                let km = metros/1000
                console.log(`${metros} metros é igual á ${km} Kilometros`)
                break
            
            default:
                console.log("Valor Inválido!")
                break
            }
        break
    case 4:
        let escolha = parseInt(prompt("escolha um numero para REPETIR ate sua escolha"))
        let num = 1
        
        while (num <= escolha) {
            console.log(num)
            num++
        }

        // for (num; num <= escolha; num++){
        //     console.log(num)
        // }
    case 5:
        let tabuada = parseInt(prompt("digite um numero para ver sua respectiva TABUADA"))
        let count = 1

        while (count <= 10){

            let resultado = tabuada * count

            console.log(`${tabuada} X ${count} = ${resultado}`)
            count ++
        }

        

}