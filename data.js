const dataUltimoAcesso = new Date("2025/06/25 17:00:00")
const dataAtual = new Date()

const hora = dataAtual.getHours()

const timeUltimoAcesso = dataUltimoAcesso.getTime()
const timeDataAtual = dataAtual.getTime()

const milissengundosHora = 1000 * 60 * 60
const milissengundosDia = milissengundosHora * 24

const diferencaTime = timeDataAtual - timeUltimoAcesso

let msg = ""

if (hora < 6 || hora > 18){
    msg = "Boa noite !!\n"
}
else if (hora > 6 || hora < 12){
    msg = "Bom dia !!\n"
}
else{
    msg = "Boa tarde !!\n"
}


if(diferencaTime > milissengundosDia){
    msg += "Voce esta ausente ha dias!"
}
else if(diferencaTime > milissengundosHora){
    msg += "Voce esta ausente ha horas!"
}
else{
     msg += "Que bom que ainda esta aqui!"
}

console.log(msg)
console.log(dataAtual)