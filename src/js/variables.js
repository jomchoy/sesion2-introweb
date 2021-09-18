var textoA = 'comillas simples'; // let es la manera actual que se recomineda para declarar una variable //
var textoB = "comillas dobles"; // const hacemos que una variable no se le pueda modificar su valor //
var textoC = "comillas dobles insertando comillas 'simples";
var textoD = 'comillas sencillas insertando comillas "dobles"';

console.log(textoA);
console.log(textoB);
console.log(textoC);
console.log(textoD);

// operaciones aritmeticas 

let x, y;
x = "5";
y = "3,2";

document.write(x + y +" " + typeof(x+y));
document.write("<br/>")
document.write(x * y +" " + typeof(x*y));
console.log(x+y);
console.log(x*y);