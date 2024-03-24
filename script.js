//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript');

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log('Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5');


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let var_string="hello world";
let var_number=1234;
let var_boolean=true;
let var_null=null;
let var_undefined;
let var_object = {
    name:"Laura",
    surname:"Benavides",
    edad:25
};
let var_array=["manzana","naranja","pera"];

console.log(var_string);
console.log(var_number);
console.log(var_boolean);
console.log(var_null);
console.log(var_undefined);
console.log(var_object);
console.log(var_array);


//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres=["helado","tarta","pastel"];
console.log(postres);


//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
const coder={
    nombre:"Laura",
    edad:25
};
console.log(coder);



//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí

console.log(typeof(var_string));
console.log(typeof(var_number));
console.log(typeof(var_boolean));
console.log(typeof(var_null));
console.log(typeof(var_undefined));
console.log(typeof(var_object));
console.log(typeof(var_array));
console.log(typeof(postres));
console.log(typeof(coder));


//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let operador1=2;
let operador2=2;
let suma=operador1+operador2;
console.log(suma);


//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let operador3=2;
let operador4=2;
let resta=operador3-operador4;
console.log(resta);


//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let operador5=2;
let operador6=5;
let multiplicacion=operador5*operador6;
console.log(multiplicacion);


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let operador7=10;
let operador8=2;
let division=operador7/operador8;
console.log(division);


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let valor1=1;
let valor2=2;
let comparacion1=valor1==valor2;
console.log(comparacion1);


// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let comparacion2=valor1!==valor2;
console.log(comparacion2);


//Ejercicio 11: completa el ejercicio

let num1 = 15
let num2 = 20
//Realiza la operación de comparación que consideres para que el resultado en consola sea true
let comparacion = num1<num2;
console.log(comparacion);


//Ejercicio 12: completa el ejercicio

let num3 = 1
let num3AsString = "1"
//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
let result = num3===num3AsString;
console.log(result);


//Ejercicio 13: completa el ejercicio
//Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
let result2 = !(num3===num3AsString);
console.log(result2);



//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

let nombre="Laura";
let apellido =" Benavides";
let nombreCompleto=nombre+apellido;
console.log(nombreCompleto);

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 === b > 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res);

let res2 = a < 10 == b < 1; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2);

let res3 = a == 5 != b == 5; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3);

let res4 = a == 6 == b == 0; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4);

let res5 = a == 0 == b == 3; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5);

let res6 = a == 6 !== b == 3; //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6); 
