function cuidadoconelconsolelog(nombre) {
    console.log(nombre);
        return nombre;
    
}
function otrafuncion() {
    return (
        "el nombre retornado por la funcion 'cuidadoConelConsolelog' es: " +
        cuidadoconelconsolelog('Mateo')
    );
}

function cuidadoConelRetunr (nombre) {
 return nombre;                  // todo lo que este debajo del return no se va a ejecutar. 
 console.log(nombre);  // esto no se imprimira ya que esta despues de un return 
}
 //Nota los console.log deben de usarse solo para ver si algo anda bien luego deben ser borrados y en caso de querer imprimir el resultado de algo
 //se debe de usa un return:
