//Tareas del dia!

/*Tarea 1:
-Obtener un numero aleatorio entre 1 y 100
-Calcular la raíz cuadrada y mostrar en consola
-Elevarlo a la quinta potencia y mostrarlo en consola

tarea 2:
-Crea una lista de numeros cualquiera y mostrar por consola
-El mayor y el menor

tarea 3:
-Dados los siguientes numeros
46.66987
"98.66547"
-dejarlos con dos decimales y mostrarlos en consola*/

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

// //Tarea 1

// let numeroRandom = Math.ceil(Math.random() * 100);
// console.log(numeroRandom);

// let raizCuadrada = Math.sqrt(numeroRandom);
// console.log(raizCuadrada);

// let base = numeroRandom;
// let exponente = 5;
// let potencia = Math.pow(numeroRandom, 5);
// console.log(potencia);

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

// //Tarea 2

// console.log(`El mas alto es: ${Math.max(6, 10, 24, 96)}`);

// console.log(`El mas bajo es: ${Math.min(6, 10, 24, 96)}`);

// // ---------------------------------------------------------------------------------------------------
// //SPREADOPERATOR

// let arregloNumeros = [34, 65654, 12, -65, 76];
// console.log(arregloNumeros);
// // console.log(Math.max(arregloNumeros));

// //SpreadOperator (...)

// console.log(...arregloNumeros);

// console.log(Math.max(...arregloNumeros));

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

// //Tarea 3
// //Solucion 1

// console.log(Math.round(46.66987 * 100) / 100);
// console.log(Math.round("98.66547" * 100) / 100);

// ---------------------------------------------------------------------------------------------------
// //Solucion 2

// let numero1 = 46.66987;
// let numero2 = "98.66547";

// // Redondear los números a dos decimales
// numero1 = numero1.toFixed(2);
// numero2 = parseFloat(numero2).toFixed(2);

// // Mostrar los números con dos decimales en la consola
// console.log("Número 1:", numero1);
// console.log("Número 2:", numero2);

// // ---------------------------------------------------------------------------------------------------
// //Solucion 3

// let numero = 49.66987;
// console.log(numero);

// let numeroFixed = numero.toFixed(2);
// console.log(numeroFixed);

// let numeroFloat = parseFloat(numeroFixed);
// console.log(numeroFloat);

// // ---------------------------------------------------------------------------------------------------

// let numString = "13.32564";
// console.log(numString);

// let numSubstring = numString.substring(0, 5);
// console.log(numSubstring);

// let numeroFloat1 = parseFloat(numSubstring);
// console.log(numeroFloat1);
