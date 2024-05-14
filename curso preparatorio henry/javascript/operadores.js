console.log (3+ 5);
console.log (3- 5);
console.log (30/ 9);
console.log (5% 100);
//las matematicas complejas tienen jerarquias ejemplo:
console.log(3 + 5 * 2 - 8); // esto normalemente nos daria 8, pero como las matematicas de js funcionan por otra jerarquia nos da 5
// ya que el multiplciador se lee primero// //pero podemos elejir nosotros esa jerarquia mediante los () ya que estos tiene la jerarquia mas alta//


// tambien podemos unir o CONCATENAR palabras o STRINGS ejemplo:
console.log ("hola" + "Mateo");
// o con variables tambien se puede hacer
var nombre1 = ' mateo';
var nombre2 = ' Rodrigo';
var nombre3 = ' Pamela';
var mensaje ='estoy estudiando soy' + nombre2;

console.log (mensaje);

// aqui en limpio :
//Suma
console.log(3 + 5);

//Resta
console.log(14 - 7);

//Multiplicacion
console.log(8 * 6);

//Division
console.log(30 / 9);

//Resto
console.log(95 % 4);

//Prueba de precedencia
console.log(3 + 5 * 2 - 8);
