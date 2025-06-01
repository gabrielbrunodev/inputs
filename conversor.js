import entradaDados from 'readline-sync';

let escolha = ""
do{
console.log("\n   --------------------\nSistema de conversor e contas: \n")
escolha = entradaDados.question("Escolha o que voce quer usar:\n\n 1-conversor milhas em quilometros\n 2- Conversor de Celsius para Kelvin\n 3-Descobrir a Area de um Triangulo\n 4-Sair  ")

switch(escolha){

    case "1":
        console.log("Bem vindo ao conversor de milhas em km! \n")

let mi = entradaDados.question("Digite a distância em Milhas para converter: ")

let km = mi * 1.609

console.log(mi+" milhas corresponde a "+km+" quilomêtros")
break

    case "2":
        console.log("Bem vindo ao conversor de Celsius em Kelvin! \n")

let c = entradaDados.question("Digite a temperatura em Celsius para converter: ")

let k = Number(c) + 273.15;

console.log(c+" celsius corresponde a "+k+" kelvin")
break

    case "3" :
        
console.log("Área do triangulo! \n")

let base = entradaDados.question("Digite a base do triangulo: ")
let altura = entradaDados.question("Digite a altura do triangulo:")

let area = (base * altura) / 2

console.log("A área do triangulo é: "+area)
break

    case "4":
        console.log("encerrando programa...")
break
    
    default:
        console.log("opção invalida")
break
}

}
while(escolha !== "4")