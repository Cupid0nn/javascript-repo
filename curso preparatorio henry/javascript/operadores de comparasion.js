//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

//Igualdad vs igualdad estricta 
console.log (3 == 3); // valor
console.log (3 === 3); //tipo de dato y valor
console.log (3 == "3"); //valor
console.log (3 === "3"); // tipo de dato y valor
console.log (7 == "7");//valor
console.log (7 === "7");//tipo de dato y valor

// cuando tiene === tiene que coincidir tanto el tipo de valor como el valor en si, es decir numero con numero, string con string ya que
// 3 no es lo mismo que '3' 

//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b; //aqui se sobre escribe el valor de A siendo ahora el de B ya que se lee de derecha a isquierda en este caso     
console.log (c); 