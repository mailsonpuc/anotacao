import { encerramento1, encerramento2 ,encerramento3, encerramento4, encerramento5 } from "./encerramento.js";



//end 1 dia/mes/ano
document.getElementById("encerramento1").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('04,03,2024'), new Date())} DIAS</i> para Etapa 1:

Análise e especificação do problema`

//end 2
document.getElementById("encerramento2").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('14,04,2024'), new Date())} DIAS</i> para Etapa 2:

Projeto dos requisitos e de artefatos do sistema`

//end 3
document.getElementById("encerramento3").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('02,06,2024'), new Date())} DIAS</i> para Etapa 3:

Desenvolvimento da solução (Parte 1)`

//end 4
document.getElementById("encerramento4").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('23,06,2024'), new Date())} DIAS</i> para Etapa 4:

Desenvolvimento da solução (Parte 2)`

//end 5
document.getElementById("encerramento5").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2023,12,10'), new Date())} DIAS</i> para Etapa 5:

Apresentação da solução`
