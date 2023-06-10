//METODOS DE ARRAY

// //CONCATENAR ARREGLOS .concat()

// let alumnos1 = ["Juan", "Valentina", "Francisco", "Florencia"];
// console.log(alumnos1);

// let alumnos2 = ["Lucas", "Camila", "Sergio", "Lucia", "Eliana"];
// console.log(alumnos2);

// let comision = alumnos1.concat(alumnos2);
// console.log(comision);

// let alumnos3 = ["Sebastien", "Humberto", "Miriam", "Hector", "Carolina"];
// console.log(alumnos3);

// // let comision = alumnos1.concat(alumnos2, alumnos3);
// // console.log(comision);

// comision = comision.concat(alumnos3);
// console.log(comision);

// ------------------------------------------------------------------------------------------

// //ORDENAR ALFABETICAMENTE
// //.sort()

// console.log(comision.sort());

// //ORDENAR AL REVES
// //.reverse()

// console.log(comision.reverse());

// ------------------------------------------------------------------------------------------
// //CON ARREGLO DE NUMEROS

// let numbers = [65, 46, 2, 556, 77, 248, 98, 56];

// console.log(numbers.sort());

// ------------------------------------------------------------------------------------------

// //CREAR UN NUEVO ARRAY, A PARTIR DE COMPONENTES DE OTROS

// //.slice()

// let ausente = comision.slice(4);
// console.log(ausente);

// let faltas = comision.slice(2, 8); //primer parametro, posicion. Segundo, hasta donde llega
// console.log(faltas);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

//TAREAS ARRAY

// //Tarea 1
// //Metodo .split()
// /*De una cadena de texto generar un array (split).
// Posteriormente mostrar la siguiente informacion:

//  . a-Numero de palabras
//  . b-Primera palabra
//  . c-Ultima palabra
//  . d-Las palabras colocadas en orden inverso
//  . e-Las palabras mostradas en orden alfabetico
//  . f-Las palabras mostradas de la z a la a
//  Sacar toda esta informacion en consola*/

// let frase = "Hola comision 52i, la mejor de Rolling";
// console.log(frase);

// //Metodo .split(): convierte una cadena string en un array

// let palabras = frase.toLowerCase().split(" ");
// console.log(palabras);

// //a ---------------------------------------------------
// console.log(palabras.length);

// //b ---------------------------------------------------
// console.log(`La primer palabra es "${palabras[0]}"`);
// /*Tambien puedo usar .at */
// console.log(`La primer palabra es "${palabras.at()}"`);
// //c ---------------------------------------------------
// console.log(`La ultima palabra es "${palabras.at(-1)}"`);

// //d ---------------------------------------------------
// console.log(palabras.reverse());

// //e ---------------------------------------------------
// console.log(palabras.sort());

// //f ---------------------------------------------------
// console.log(palabras.sort().reverse());

// // ------------------------------------------------------------------------------------------
// let enigma = ["🥚", "🐔"];
// console.log(enigma.sort());

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// //Tarea 2

// /*Lista de numeros, donde el usuario debera ingresar un numero,
// y le tenemos que decir si adivina o no! */
// //Metodo .includes()

// let lista = [65, 2, 89, 665, 46, 14, 87];

// // let numero = parseInt(prompt("Ingrese un numero:"));
// let numero = Number(prompt("Ingrese un numero:"));
// console.log(numero);

// if (lista.includes(numero)) {
//   console.log("Adivinaste el numero 😁");
// } else {
//   console.log("No adivinaste!!! 😪");
// }

// ------------------------------------------------------------------------------------------
// //Tarea 3

// /*Declarar un array que llamamos "clasificaciones" con los siguientes valores:
// Ana, Osvaldo, Raul, Celia, maria, Antonio (vamos a suponer que es el orden
//     de clasficacion de un concurso en un momento dado)

//     -imprime la clasificacion actual
//     -el concurso continua, y se van a modificar las posiciones,
//     debemos cambiar en el array:
//         a- Antonio es descalificado y es eliminado
//         b- detras de Ana y antes de Osvaldo se clasfifican
//         dos nuevos concursantes
//         c- Hay una nueva participante que pasa a ser primera
//         d- Imprimer la nueva clasificacion*/

// let calificaciones = ["Ana", "Osvaldo", "Raul", "Celia", "Maria", "Antonio"];
// console.log(calificaciones);

// //a
// calificaciones.pop("");
// console.log(calificaciones);

// //b
// calificaciones.splice(1, 0, "Benjamin", "Rosario");
// console.log(calificaciones);

// //c
// calificaciones.unshift("Micaela");
// console.log(calificaciones);

// calificaciones.splice(0, 0, "Dante");
// console.log(calificaciones);
// ------------------------------------------------------------------------------------------
// //Tarea 4
////COMO AGREGAR ELEMENTOS A UN ARRAY VACIO

// /*Pedir por pantalla nombre de 5 alumnos
//  - Guardarlos en un arreglo
//  - usando el arreglo mostrar en consola, por cada alumno,
//  un mensaje de bienvenida*/

// let alumnos = [];
// console.log(alumnos);

// //Crear el arreglo
// for (let i = 0; i < 5; i++) {
//   let nombre = prompt("Ingrese el nombre del alumno");
//   alumnos.push(nombre);
// }

// //Mostrar el mes de bienvenida
// for (let i = 0; i < alumnos.length; i++) {
//   console.log(`Bienvenido/a, ${alumnos[i]}!`);
// }
