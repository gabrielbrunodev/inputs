import entrada from 'readline-sync'

console.log("Aplicação de Juros: \n\n")

let valor = entrada.question("Informe o valor devido: R$ ")
let dias = entrada.question("\nInforme quantos dias se passaram desde o vencimento do boleto: ")

console.log("\nValor original da dívida: R$ "+valor)
console.log("Dias atrasados: "+dias)

let juros= 0

if(valor>0){
    if(dias>0&&dias<=15){
        juros = 5
    }
    else if(dias>15){
        juros = 10
    }
    else{
        console.log("\nVocê está em dia!\n")
    }
}
else{
    console.log("\nVocê não esta com dívida!\n")
}

let taxaJuros = (valor/100) *juros
let totalJuros = taxaJuros + Number(valor)

console.log("Taxa de juros: "+juros+"%")
console.log("Valor total com juros: R$ "+totalJuros)