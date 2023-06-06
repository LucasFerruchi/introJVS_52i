//METODO PROMPT
/*Le vamos a pedir al usuario que ngrese los datos */

// let nombreApellido = prompt("Ingrese su nombre y apellido:");
// console.log(nombreApellido);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

//TAREAS DE STRING
/*
 1.
 A-INGRESAS UN APELLIDO-OJO -- HACER EL EJERCICIO CON PROMPT
 B-CALACULAR SU CANTIDAD DE CARACTERES, DEBE APARECER "APELLIDO" TIENE "x" CARACTERES
 C-OBTENER EL ULTIMO CARACTER DEL APELLIDO

 2.
 EN LA SIGUIENTE PALABRA "mascota"
A-PASARLA A MAYUSCULA
B-PASARLA A MINUSCULA
C-CAPITALIZAS LA PALABRA "Mascota"
 */

// //1
// //A
// let apellido = prompt("Ingrese su apellido:");
// console.log(apellido);
// //B
// console.log(`${apellido} tiene ${apellido.length} caracteres!`);
// //C
// console.log(`El ultimo caracter de ${apellido} es ${apellido.at(-1)}`);

// //2 mascota
// let palabra = "mascota";
// //A
// console.log(palabra.toUpperCase());
// //B
// console.log(palabra.toLowerCase());
// C - Mascota
// //Obtener el primer caracter
// let primeraLetra = palabra.at(0).toUpperCase();
// console.log(primeraLetra);

// //Obtener el resto de la palabra
// let restoPalabra = palabra.substring(1);
// console.log(restoPalabra);
// //Concatenar
// console.log(primeraLetra + restoPalabra);

// //Hacerlo en una sola linea

// // let palabracapitalizada = palabra.at(0).toUpperCase() + palabra.substring(1);
// // console.log(palabracapitalizada);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// //MATH

// //REDONDEAR NUMEROS
// //para abajo  .floor
// console.log(Math.floor(45.98));
// //al numero entero mas cercano .round
// console.log(Math.round(45.5));
// //para arriba .ceil
// console.log(Math.ceil(45.12));

// //Mostrar el mayor
// console.log(`El numero maximo es: ${Math.max(54, 65, 3, 998, 13, 8845)}`);

// //Mostrar el menor
// console.log(`El numero mas bajo es: ${Math.min(54, 65, 3, 998, 13, 8845)}`);

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

// //Convertirun numero STRING a tipo number

// let numero = prompt("Ingrese un numero");
// console.log(numero);

// //parseInt
// // numero = parseInt(numero);
// // console.log(numero);
// //parseFloat
// // numero = parseFloat(numero);
// // console.log(numero);

// //Lo mejor seria crear nuevas variables para guardar el nuevo valor

// let nuevoNumero = parseInt(numero);
// console.log(nuevoNumero);
// let numeroFloat = parseFloat(numero);
// console.log(numeroFloat);

// //Como hacer para que el numero aparezca solo con dos decimales
// // console.log(Math.round(numeroFloat * 100) / 100);

// //Para quitar decimales

// console.log(numeroFloat.toFixed(2));
// console.log(parseFloat(numeroFloat.toFixed(2)));

// ---------------------------------------------------------------------------------------------------

// //Elevar un numero a la potencia
// //Math.pow

// let base = nuevoNumero;
// let exponente = 2;
// // console.log(Math.pow(base, exponente));
// let resultadoPotencia = Math.pow(base, exponente);
// console.log(resultadoPotencia);

// //Calcular la raiz cuadrada
// //Math.sqrt
// console.log(Math.sqrt(numeroFloat));
// console.log(parseFloat(Math.sqrt(numeroFloat).toFixed(2)));

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

//Numeros Randoms

/*Math.random()
Devuelve numeros aleatorios del 0 al 1

Math.random()*10
Devuelve numeros aleatorios del 1 al 10

Math.random()*100
Devuelve numeros aleatorios del 10 al 100*/

/*!!!Tener en cuenta que los valores que devuelve estan con decimales: PARA QUITARLOS USAMOS .ceil

ej: "Math.ceil(Math.random()*100);"*/
