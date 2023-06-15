//Tarea 1

/*Teniendo tres arreglos de numeros, unir a todos en uno solo y
ordenarlo de mayor a menor.
-luego ordenar de menor a mayor*/

let numeros1 = [65, 79, 6, 654, 13, 7, 643];
let numeros2 = [9, 32, 11, 9864, 3, 647, 1];
let numeros3 = [99, 75, 36, 77, 2, 6745, 81];

//a-unirlos a todos

const tarea1 = () => {
  let numerosUnidos = numeros1.concat(numeros2, numeros3);
  return numerosUnidos.sort((a, b) => a - b);
};
console.log(tarea1());

console.log(tarea1().reverse());

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//Tarea 2

/*Filtrar de un arreglo de personas,
todos los nombres que contengan la letra "m"*/

let personas = [
  "Joaquin",
  "Daniela",
  "Mario",
  "Celia",
  "Magdalena",
  "Ramiro",
  "Armando",
  "Valentino",
];

console.log(personas);

const nombreFiltrado = (letra) => {
  let nombres = personas.filter((persona) => {
    return persona.toUpperCase().includes(letra.toUpperCase());
  });
  return nombres;
};

console.log(nombreFiltrado("m"));

// ------------------------------------------------------------------------------------------

let nombresFiltrados = personas.filter((persona) =>
  persona.toLowerCase().includes("ma")
);

console.log(nombresFiltrados);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//Tarea3

/*Tomar una lista de lenguajes de programacion y mostrar en consola,
-una lista ordenada alfabeticamente, numerada y en mayusculas
!!SIN MUTAR EL ORIGINAL!!*/

//Lista de lenguajes

let lenguajes = ["javascript", "python", "c++", "java", ".net"];
console.log(lenguajes);

const ordenar = () => {
  let nuevoArreglo = lenguajes.slice(0); //CREO NUEVO ARREGLO
  nuevoArreglo.sort(); //ORDENO EL NUEVO ARREGLO
  nuevoArreglo.forEach((lenguaje) => {
    //MAYUSCULAS
    console.log(lenguaje.toUpperCase());
  });
};

console.log(ordenar());
