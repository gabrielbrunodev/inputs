import listaDeFrutas from "./dados.js";


function atualizarPalavra(palavraOculta, letra, palavra) {
    let palavraArray = palavraOculta.split('')

    for (let i = 0; i < palavra.length; i++) {
        if (letra === palavra[i]) {
            palavraArray[i] = letra
        }
    }

    return palavraArray.join('')
}

function validarLetra(letra){
    if( letra.length === 1 && letra.match(/[a-z]/i)){
        return true 
    }
    else{
        return false
    }
     }

  
function verificarChances(palavra,letra){
   
     return palavra.includes(letra) === true
    }

function status(statusJogo, palavra){
    if(statusJogo === "perdeu"){
        return "\nVOCÊ PERDEU! a palavra correta era: " + palavra.toUpperCase()
    }
    else if(statusJogo === "venceu"){
        return "\n-- "+palavra.toUpperCase() +" -- PARABÉNS VOCÊ GANHOU!!"
    }
    else{
        return ""
    }

}



export {atualizarPalavra, validarLetra,verificarChances, status};