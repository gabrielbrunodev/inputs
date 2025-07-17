const chuvaDeMeteoros = [
   { nome: 'Alfa Centaurídeos',     declinacao: -59 },
   { nome: 'Gama Normídeos',         declinacao:         -50 },
   { nome: 'Pi Pupídeos',                    declinacao:       -45 },
   { nome: 'Líridas',                     declinacao:   34  },
   { nome: 'Eta Aquáridas',               declinacao:         -1  },
   { nome: 'Eta Líridas',           declinacao:       44  },
   { nome: 'Bootídeos de Junho',             declinacao: 48  },
   { nome: 'Alfa Capricornídeos',    declinacao:          -10 },
   { nome: 'Delta Aquáridas do Sul', declinacao:        -16 },
   { nome: 'Piscis Austrinídeos',             declinacao:   -30 },
   { nome: 'Perseidas',              declinacao:     58  },
 ];

 const hemisferioNorte = chuvaDeMeteoros.filter(
    (chuva) => chuva.declinacao >=0
 );

 const hemisferioSul = chuvaDeMeteoros.filter(
    (chuva) => chuva.declinacao <0
 );

 const imprimir = function(chuva) {
    console.log(chuva)
 }

 console.log("Chuvas no Hemisfério Norte \n")
 hemisferioNorte.forEach(imprimir)

 console.log("\nChuvas no Hemisfério Sul\n")
 hemisferioSul.forEach(imprimir)