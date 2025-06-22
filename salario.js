import entrada from 'readline-sync'

let salario_inflacao = [
    { ano: 2010, salario: 510, ipca: 5.91 },
    { ano: 2011, salario: 545, ipca: 6.50 },
    { ano: 2012, salario: 622, ipca: 5.84 },
    { ano: 2013, salario: 678, ipca: 5.91 },
    { ano: 2014, salario: 724, ipca: 6.41 },
    { ano: 2015, salario: 788, ipca: 10.67 },
    { ano: 2016, salario: 880, ipca: 6.29 },
    { ano: 2017, salario: 937, ipca: 2.95 },
    { ano: 2018, salario: 954, ipca: 3.75 },
    { ano: 2019, salario: 998, ipca: 4.31 },
    { ano: 2020, salario: 1045, ipca: 4.52 }
]

console.log("Escolha uma das alternativas:\n\n")

let escolha = entrada.question(" 1 - Listar os salarios minimos de 2010 a 2020\n 2 - Listar o indice IPCA de 2010 a 2020\n 3 - Comparacao entre o percentual de aumento salarial e IPCA\n\n Digite o numero da sua escolha: ")

let salario = salario_inflacao.salario
let ano = salario_inflacao.ano
let ipca = salario_inflacao.ipca

if (escolha == 1) {
    console.log("\nOpção escolhida: " + escolha + "\n")

    for (let salarial of salario_inflacao) {

        let salario = salarial.salario
        let ano = salarial.ano

        console.log(" Ano: ".padEnd(20, "-") + ano)
        console.log(" Salario: ".padEnd(20, "-") + "R$ " + salario + ",00\n")
    }

}
else if (escolha == 2) {
    console.log("\nOpção escolhida: " + escolha + "\n")

    for (let salarial of salario_inflacao) {

        let ano = salarial.ano
        let ipca = salarial.ipca

        let ipca_novo = ipca.toFixed(2).replace(".", ",")

        console.log(" Ano: ".padEnd(30, "-") + ano)
        console.log(" Inflacao IPCA: ".padEnd(30, "-") + ipca_novo + "%\n")
    }

}
else if (escolha == 3) {
    console.log("\nOpção escolhida: " + escolha + "\n")

    for (let i = 0; i < salario_inflacao.length; i++) {
        let ano = salario_inflacao[i].ano
        let salarioAtual = salario_inflacao[i].salario
        let crescimentoFormatado

        if(i === 0){
        crescimentoFormatado = "- -"
    }
    else{
        let salarioAnterior = salario_inflacao[i - 1].salario
        let diferenca = salarioAtual - salarioAnterior
        let crescimento = (diferenca / salarioAnterior) * 100
         crescimentoFormatado = crescimento.toFixed(2).replace(".", ",")
    }

         let ipca = salario_inflacao[i].ipca
        let ipcaFormatado = ipca.toFixed(2).replace(".", ",")
        

        console.log(" Ano: ".padEnd(40, "-") + ano)
        console.log(" Salário: ".padEnd(40, "-") + "R$ " + salarioAtual + ",00")
        console.log(" Inflação IPCA: ".padEnd(40, "-") + ipcaFormatado + "%")
        console.log(" Crescimento Salarial: ".padEnd(40, "-") + crescimentoFormatado + "%\n")
    }

}
else {
    console.log("Opção inválida!")
}



