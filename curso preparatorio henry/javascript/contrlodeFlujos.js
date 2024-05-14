function viajar (destino){
    if (destino==='brasil'){
        console.log("gire a la Isquierda")
} else if ( destino ==='argentina'){
    console.log('gire a la derecha')
}
else {
    console.log('nos perdimos');
}
}



viajar ('no se');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function puedemanejar (edad) {
    if (edad >= 18) {
        console.log(true)
    }
    else {
        console.log(false);
    }
}
puedemanejar (90);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// la compocicion del if else es la siguiente//
// function ; // 1ro el funcition que aclara que se trata de una funcion//
// nombre ; //2do va el nombre de la funcion
// (argumento); //3ro seguido de un argumento, luego se habre con un {
 function viajar(destino) {
    if(destino === 'Brasil') {
        console.log('Gire a la izquierda');
} else if(destino === 'Argentina') {
        console.log('Gire a la derecha');
} else {
        console.log('Nos perdimos');''
}
};
viajar('Brasil');
viajar('Argentina');

//
function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);