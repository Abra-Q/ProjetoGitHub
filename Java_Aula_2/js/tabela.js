let tabela = [
    ["Nome", "Idade", "Sexo", "Altura"],
    ["Pedro", 33, "M", 1.95],
    ["Ana", 22, "F", 1.68]
]

while (true) {
    let op = parseInt(prompt("1-Lista itens\n2-Adicionar itens\n3-Remover itens\n4-Sair do Estoque"))

    if (op === 1) {
        console.table(tabela)
    } else if (op === 2) {

        let nome = prompt("Digite o nome da pessoa que deseja inserir: ")
        let idade = parseFloat(prompt("Digite a idade da pessoa que deseja inserir: "))
        let sexo = prompt("Digite o sexo da pessoa que deseja inserir: ")
        let altura = parseFloat(prompt("Digite a altura da pessoa que deseja inserir: "))

        tabela.push([nome, idade, sexo, altura])

    } else if (op === 3) {

        let linha = parseFloat(prompt("Digite o número da linha que deseja remover "))
        tabela.splice(linha,1)
        alert(`Linha ${linha} removida com sucesso!`)

    } else if (op === 4) {
        alert("Saindo do Estoque...");
        break;
    } else {
        alert("Opção inválida. Tente novamente.");
    }
}