let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
]

for (let cursos of cursos_idiomas) {

    let nome_curso = cursos.nome
    let preco_curso = cursos.preco 
    let carga_horaria_curso = cursos.carga_horaria

    let carga_horaria_hora = preco_curso / carga_horaria_curso

    console.log("nome do curso: "+ nome_curso)
    console.log("preço do curso: "+ preco_curso)
    console.log("carga horária: "+ carga_horaria_curso)

    if(carga_horaria_hora >= 15){
        console.log("hora/aula superior ou igual a R$15,00")
    }
    else{
        console.log("hora/aula inferior a R$15,00")

    }

    console.log("\n")

}