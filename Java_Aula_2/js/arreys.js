// let numeros = [0,1,2,3,4,5]

// numeros.forEach((num) => {
//     console.log(num*2)
// })





// let aNomes = ["Pedro Henrique", "João Pedro", "Ana Maria", "Maria Fernanda"]

// aNomes.forEach((nome, i) => {
//     console.log(i, nome)
// })





// let aNomes = ["Pedro Henrique", "João Pedro", "Ana Maria", "Maria Fernanda"]

// let resultado = aNomes.map((nome) => {
//     let nomes = nome.split(' ')
//     return nomes[1]
// })

// console.log(resultado)




// let aNomes = ["Pedro Henrique", "João Pedro da Silva", "Ana Maria", "Maria Fernanda Antonia"]

// let fNomes = aNomes.filter((item) => {
//     let nomes = item.split(" ")
//     if (nomes.length > 2) {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(aNomes)
// console.log(fNomes)




// let aNomes = ["Pedro Henrique", "João Pedro da Silva", "Ana Maria", "Maria Fernanda Antonia"]

// let fNomes = aNomes.filter((item) => {
//     let nomes = item.split(" ")
//     return nomes.length > 2
// })

// console.log(aNomes)
// console.log(fNomes)




// let aNomes = ["Pedro Henrique", "João Pedro da Silva", "Ana Maria", "Maria Fernanda Antonia"]

// let nomes = aNomes.slice(0, 2)

// console.log(nomes)




// let pessoas = [
//     {nome: "Pedro", idade: 22},
//     {nome: "Ana", idade: 19},
//     {nome: "João", idade: 33}
// ]

// for (i in pessoas) {
//     console.log(pessoas[i].idade)
// }





// let pessoa = {
//     nome: "Pedro",
//     idade: 22,
//     sexo: "M",
//     altura: 1.75,
//     filhos: ["Ana", "João", "Maria"]
// }

// pessoa.nome = "Thiago"

// pessoa.idade = 55

// console.log(pessoa.nome, pessoa.idade)






// function clickDoBotao() {
//     let area = document.querySelector(".area")

//     let p = document.createElement("p")

//     p.innerHTML = "Texto de Teste"

//     area.appendChild(p)
// }


let btn = document.querySelector("button")


btn.addEventListener("click", () => {
    console.log("Clicou no botão esquerdo!")
})

btn.addEventListener("contextmenu", (event) => {

    event.preventDefault()
    console.log("Clicou no botão direito!")
})