let colecao_signos = [
    { "Nome": "Aquario", "DataInicio": "01-20", "DataFim": "02-18" },
    { "Nome": "Peixes", "DataInicio": "02-19", "DataFim": "03-20" },
    { "Nome": "Aries", "DataInicio": "03-21", "DataFim": "04-19" },
    { "Nome": "Touro", "DataInicio": "04-20", "DataFim": "05-20" },
    { "Nome": "Gemeos", "DataInicio": "05-21", "DataFim": "06-21" },
    { "Nome": "Câncer", "DataInicio": "06-22", "DataFim": "07-23" },
    { "Nome": "Leão", "DataInicio": "07-24", "DataFim": "08-22" },
    { "Nome": "Virgem", "DataInicio": "08-23", "DataFim": "09-22" },
    { "Nome": "Libra", "DataInicio": "09-23", "DataFim": "10-22" },
    { "Nome": "Escorpião", "DataInicio": "10-23", "DataFim": "11-21" },
    { "Nome": "Sagitario", "DataInicio": "11-22", "DataFim": "12-21" },
    { "Nome": "Capricornio", "DataInicio": "12-22", "DataFim": "01-19" }
];

const verifica_data_range = (data,data_inicio,data_fim,comparacao) => {
     if(comparacao == "and") {
            return (data >= data_inicio && data <= data_fim)
                
            
        }
        else if(comparacao == "or") {
            return (data >= data_inicio || data <= data_fim)
        }
}

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear()

    for (const signo of signos) {

        let data_inicio_signo = new Date(ano + "-" + signo.DataInicio + " 00:00:00")
        let data_fim_signo = new Date(ano + "-" + signo.DataFim + " 23:59:59")

        let tipo_comparacao = signo.DataInicio === "12-22" ? "or" : "and";

       if (verifica_data_range(data,data_inicio_signo,data_fim_signo,tipo_comparacao)){
        return signo.Nome;
       }

    }
}

let data_app = new Date()

const nome_signo = retorna_signo(colecao_signos, data_app)

console.log("O signo de hoje é: " + nome_signo) 
