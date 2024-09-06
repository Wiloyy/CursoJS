
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado'
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
    
} 
    
    const data = new Date(`2006-08-19 4:43:9`)
    
    const diaSemana = data.getDay();
    let diaSemanaTexto = getDiaSemanaTexto(diaSemana)
    console.log(diaSemanaTexto)

//switch (diaSemana) {
//    case 0:
//        diaSemanaTexto = 'Domingo'
//        break;
//    case 1:
//        diaSemanaTexto = 'Segunda'
//        break;
//    case 2:
//        diaSemanaTexto = 'Terça'
//        break;
//    case 3:
//        diaSemanaTexto = 'Quarta'
//        break;
//    case 4:
//        diaSemanaTexto = 'Quinta'
//        break;
//    case 5:
//        diaSemanaTexto = 'Sexta'
//        break;
//    case 6:
//        diaSemanaTexto = 'Sabado'
//        break;
//    default:
//        diaSemanaTexto = '';
//        break
//}


//
//if(diaSemana === 0 ) {
//    diaSemanaTexto = 'Domingo';
//} else if (diaSemana ===1 ){
//    diaSemanaTexto = 'segunda'
//}else if (diaSemana ===2 ){
//    diaSemanaTexto = 'terça'
//}else if (diaSemana ===3 ){
//    diaSemanaTexto = 'quarta'
//}else if (diaSemana ===4 ){
//    diaSemanaTexto = 'quinta'
//}else if (diaSemana ===5 ){
//    diaSemanaTexto = 'sexta'
//}else if (diaSemana === 6 ){
//    diaSemanaTexto = 'sabado'
//}