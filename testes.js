/*let alunos = [
    {id: 1, nome: "Gabriel", media:6},
    {id: 2, nome: "Jaqueline", media:7},
    {id: 3, nome: "Isaque", media:4},
    {id: 4, nome: "Diogo", media:5},
    {id: 5, nome: "Janaina", media:8}
]

for (let dados of alunos) {

    let nome = dados.nome
    let media = dados.media

    if (media < 6) {
        continue
    }

    console.log("id: " + dados.id)
    console.log("nome: "+ nome)
    console.log("media: "+ media)
} 

//////////////////////////////////////////
    let linguagem = "JavaScript";
let stack = "front-end";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
} */
let frase = "Aprender JavaScript é gratificante! A linguagem JavaScript é bastante requisitada no mercado de trabalho";

frase = frase.replace("JavaScript","JS");


console.log(frase);