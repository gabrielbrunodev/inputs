import listaDeFrutas from "./dados.js";
import {atualizarPalavra, validarLetra,verificarChances,status } from "./funcoes.js";
import entrada from "readline-sync";
//sorteio das palavras
let palavra = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];
let letra
//formatando a palavra para deixa-lá oculta ex: a_ _ _ _
let primeiraLetra = palavra[0]
let underline = "_".repeat(palavra.length - 1)
let palavraOculta = primeiraLetra + underline

//função que inicia o jogo
function iniciarJogo(palavra, palavraOculta) {
    //declarando variaveis e array que vou usar
    let n_letras = palavra.length
    let statusJogo = "andamento"
    let chances = 4
    let letrasTentadas = []
    //mensagem de inicio
    console.log("------------JOGO DA FORCA------------\n")
    console.log("Nome da fruta com " + n_letras + " letras:")

    // estrutura while para perguntar as letras ate acertar ou errar, fazendo as verificações
    while (statusJogo === "andamento") {
        console.log("\nLetras já tentadas: " + letrasTentadas.join(","))
        console.log("  -Fruta: " + palavraOculta)
        //onde vai ser digitado a letra
        letra = entrada.question("Digite uma letra: ").toLowerCase();
        //chamando a funcao que verifica se a letra é valida
        if (validarLetra(letra) === false ){
            console.log("ERRO!Digite apenas uma letra!")
            continue;
        }
        // condicional para verificar se a letra ja foi digitada
        if(letrasTentadas.includes(letra)){
            console.log("letra repetida! tente outra")
            continue;
        }
        letrasTentadas.push(letra)//adicionando a letra no array
        
        //aqui sera vericado se a letra digitada faz parte da palavra
        let acertou = verificarChances(palavra, letra);

        //se fizer parte, a letra vai aparecer na palavra oculta na posicão correta
        if(acertou == true){
          let novaPalavra =  atualizarPalavra(palavraOculta, letra, palavra)
            palavraOculta = novaPalavra
        }
        //se nao vai perdendo chances ate zerar
        else{
            chances--
            console.log("letra errada!voce ainda tem " + chances + " chances")
        }
        
        //verifica se o jogador perdeu ou venceu
        if (palavraOculta === palavra) { statusJogo = "venceu" };
        if (chances === 0 ){statusJogo = "perdeu"};

        console.log(status(statusJogo,palavra))
        
    }

}

//inicializa o jogo
iniciarJogo(palavra,palavraOculta);

