let tabela = [
    {equipe: 'Time Azul', pontos: 25 },
    {equipe: 'Time Verde', pontos: 47 },
    {equipe: 'Time Amarelo', pontos: 39 },
    {equipe: 'Time Vermelho', pontos: 16 },
];

function ordenar(a,b){
    return b.pontos - a.pontos
}

tabela.sort(ordenar)

for (let i=0; i<tabela.length;i++){
    let indice = i +1
    console.log(indice+" | "+ tabela[i].equipe+" - "+tabela[i].pontos+" pts")
}