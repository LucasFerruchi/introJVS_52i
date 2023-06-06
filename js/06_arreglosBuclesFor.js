//FOR

/*Sintaxis

for (let i=0; i<=10; i++){
    #accion
}

*/

// for (let i = 0; i < 5; i++) {
//   let nombre = prompt("Ingrese el nombre del alumno!");
//   console.log(`Bienvenido ${nombre} al equipo!💪`);
// }

// ------------------------------------------------------------------------------------------
// //Tambien puedo decretar una variable por fuera del ciclo

// let cantidad = 3;

// for (let i = 0; i < cantidad; i++) {
//   let nombre = prompt("Ingrese el nombre del alumno!");
//   console.log(`Bienvenido ${nombre} al equipo!💪`);
// }

// ------------------------------------------------------------------------------------------
//Ejercicio de las tablas con WHILE

/*

let tabla = 2;
let valor = 1; //iterador

while (valor <= 10) {
  console.log(`${tabla} x ${valor} = ${tabla * valor}`);
  valor++;
}

*/

// //EJERCICIO DE LAS TABLAS CON FOR

// let tabla = parseInt(prompt("Ingrese la tabla a calcular!"));

// console.log(`Esta es la tabla del ${tabla} 😁`);

// for (let i = 1; i <= 10; i++) {
//   console.log(`${tabla} x ${i} = ${tabla * i}`);
// }

// ------------------------------------------------------------------------------------------
// //Ejercicio MULTITABLA

// let multiTabla = null;

// do {
//   multiTabla = parseInt(prompt("Ingrese la tabla a calcular!"));
//   if (multiTabla >= 0) {
//     console.log("====================");
//     console.log(`Tabla del ${multiTabla} 🤩`);
//     console.log("====================");
//     for (let i = 1; i <= 10; i++) {
//       console.log(`${multiTabla} x ${i} = ${multiTabla * i}`);
//     }
//   } else {
//     console.log("No es una tabla valida! 😅");
//   }
// } while (multiTabla >= 0);

// // ------------------------------------------------------------------------------------------
// //TAREA: Lista de alumnos:
// /*Desarrollar un programa que cree una lista de alumnos,
// primero que pida la cantidad de alumnos y luego
// pedir los nombres de cada uno, una vez ingresados los nombres,
// arroje la lista en consola! */

// let cantidadAlumnos = ;
// console.log(cantidadAlumnos);
// let nombreAlumno= "";
// let lista ="";

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

//ARRAYS

let alumnos = ["Juan", "Sofia", "Marcos", "Camila"];
console.log(alumnos);

console.log(alumnos[2]);

//Si quiero obtener la CANTIDAD de elementos del arreglo
console.log(alumnos.length);

console.log(alumnos[alumnos.length - 1]);

//ITERAR: recorrer un arreglo

for (let i = 0; i < alumnos.length; i++) {
  console.log(`Hola soy ${alumnos[i]}`);
}

//Metodo .at()
console.log(alumnos.at(0));

//Devolver el ultimo
console.log(alumnos.at(-2));

//Metodo .join()
console.log(`Alumnos de la comision 52i: ${alumnos.join(", ")}`);

//AGREGAR ELEMENTOS AL ARREGLO
alumnos.push("Valeria", "Emma"); //agregar al final
console.log(alumnos);
//agrega al principio
alumnos.unshift("Santiago");
console.log(alumnos);

//ELIMINAR ELEMENTOS DEL ARREGLO
//Elimnar el ultimo
alumnos.pop();
console.log(alumnos);

//Eliminar al principio
alumnos.shift();
console.log(alumnos);

//ENCONTRAR UN ELEMNTO DEL ARREGLO
//.includes
console.log(alumnos.includes("Sofia"));
//Devuelve true o false

//.indexOf()
let pos = alumnos.indexOf("Sofia");
console.log(pos);

//Eliminar sabiendo la posicion del elemento
//!!Metodo SPLICE()

alumnos.splice(pos, 1);
console.log(alumnos);

//!!Tambien puedo usar SPLICE para agregar elementos
alumnos.splice(1, 0, "Alexis", "Mariana");
console.log(alumnos);

//!!Tambien puedo usar SPLICE para reemplazar elementos
alumnos.splice(2, 3, "Alfredo", "Silvia", "Fernando");
console.log(alumnos);
