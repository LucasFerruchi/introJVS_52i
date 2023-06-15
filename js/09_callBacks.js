//CALLBACKS

/*Funciones anidadas dentro de los PARAMETROS,
de otras funciones o metodos */

const numeros = [95, 46, 2, 69, 17, 63, 612, 4, 874];
console.log(numeros);

// let numerosOrdenados = numeros.sort();
// console.log(numerosOrdenados);

let numerosOrdenados = numeros.sort(function (a, b) {
  return a - b;
});
console.log(numerosOrdenados);

// let numerosOrdenados = numeros.sort((a, b) => a - b);
// console.log(numerosOrdenados);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//METODO FILTER

let pares = numeros.filter((numero) => {
  return numero % 2 === 0;
});
console.log(pares);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//METODO FIND

let alumnos = ["Sofia", "Raul", "Marcos", "Camila", "Eliana", "Susana"];
console.log(alumnos);

let busqueda = alumnos.find((alumno) => {
  return alumno === "Raul";
});
console.log(busqueda);

// ------------------------------------------------------------------------------------------
//Aplicamos find en arreglo de numeros

let busquedaNumeros = numeros.find((numero) => {
  return numero <= 90;
});
console.log(busquedaNumeros);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//METODO FINDINDEX

let indice = alumnos.findIndex((alumno) => {
  return alumno === "Marcos";
});
console.log(indice);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
/*Recorrer un areglo o iterar*/
//METODO FOREACH

alumnos.forEach((alumno) => {
  let nombre = alumno.toUpperCase();
  console.log(`Hola soy ${nombre}`);
});

/*Comparar con el ciclo FOR

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

*/

// ------------------------------------------------------------------------------------------
/*Recorrer un areglo o iterar*/
//METODO MAP

/*Recorre un arreglo y devuelve uno NUEVO*/

let numerosDobles = numeros.map((numero) => {
  return numero * 2;
});
console.log(numerosDobles);
