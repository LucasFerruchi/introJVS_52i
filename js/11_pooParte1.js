//POO - Programacion Orientada a Objetos

// let alumno = {
//   nombre: "Samuel",
//   apellido: "Gonzalez",
//   edad: 21,
//   dni: 999999,
//   curso: "Full Stack",
// };
// console.log(alumno);

// let alumno2 = {
//   nombre: "Carlos",
//   apellido: "Gutierrez",
//   edad: 21,
//   dni: 999998,
//   curso: "Full Stack",
// };
// console.log(alumno2);

// // ------------------------------------------------------------------------------------------
// //Como recorremos un objeto
// //FORIN: tenemos acceso a las propiedades del objeto

// for (const propiedad in alumno) {
//   //Mostramos las propiedades
//   //   console.log(propiedad);
//   //MOstrar propiedades y su valor
//   console.log(`${propiedad} : ${alumno[propiedad]}`);
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// //FUNCIONES DENTRO DEL OBJETO

// let alumno3 = {
//   nombre: "Carlos",
//   apellido: "Gutierrez",
//   edad: 21,
//   dni: 999998,
//   curso: "Full Stack",
//   //Funcion ------------------
//   saludar: function () {
//     console.log(`Hola soy ${this.nombre}!`);
//   },
// };

// alumno3.saludar();

// //Funcion por fuera del objeto

// const saludar = () => {
//   console.log(`Hola soy ${alumno3.nombre}!`);
// };

// saludar();

// --------------------------------------------------------------
// //Como se ve en consola?
// console.log(alumno3);

// //Recorrer alumno3, se muestra la funcion
// for (const propiedad in alumno3) {
//   console.log(`${propiedad} : ${alumno3[propiedad]}`);
// }

// //Ocultar la funcion
// for (const propiedad in alumno3) {
//   if (propiedad !== "saludar") {
//     console.log(`${propiedad} : ${alumno3[propiedad]}`);
//   }
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// //EJERCICIO
// /*
// Crear un objeto persona con las propiedades:
// nombre, edad y genero y el metodo obtDetalle()
// que muestra por pantalla las propieades del objeto
// */

// const persona = {
//   nombre: "Martin Avaloz",
//   edad: 27,
//   genero: "Masculino",
//   obtDetalle: function () {
//     for (const propiedad in this) {
//       if (propiedad !== "obtDetalle") {
//         console.log(`${propiedad} : ${this[propiedad]}`);
//       }
//     }
//   },
// };

// persona.obtDetalle();

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//ARREGLOS DE OBJETOS

let alumnos = [
  {
    nombre: "Fabrizio",
    curso: "FullStack",
  },
  {
    nombre: "Gabriela",
    curso: "FullStack",
  },
  {
    nombre: "Pedro",
    curso: "FrontEnd",
  },
];

//Como lo vemos?
console.log(alumnos);

// ------------------------------------------------------------------------------------------
//RECORRER UN ARREGLO DE OBJETOS
//Ciclo FOR

for (let i = 0; i < alumnos.length; i++) {
  console.log(`Nombre ${alumnos[i].nombre} - ${alumnos[i].curso}`);
}

// ------------------------------------------------------------------------------------------
//RECORRER UN ARREGLO DE OBJETOS
//Ciclo FOREACH

/*

array.forEach(element => {
    
});

*/

alumnos.forEach((alumno) => {
  console.log(`Nombre ${alumno.nombre} - ${alumno.curso}`);
});

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//Arreglo de un BD
let data = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "http://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "http://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funque@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "http://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "http://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "http://reqres.in/img/faces/11-image.jpg",
  },
];

console.log(data);

// ------------------------------------------------------------------------------------------

/*Crear una tarjeta por cada usuario de presentacion con:
apellido, nombre y correo

-----Tarjeta de presentación-----
nombre: Juan Perez
correo: perezjuan@gmail.com

*/

const tarjetaPresentacion = () => {
  data.forEach((persona) => {
    document.write("<strong>-----Tarjeta de presentacion-----</strong><br>");
    document.write(
      `<b>Nombre: </b> ${persona.first_name} ${persona.last_name}<br>`
    );
    document.write(`<b>Correo: </b>${persona.email}<br><br>`);
  });
};

tarjetaPresentacion();

// ------------------------------------------------------------------------------------------
