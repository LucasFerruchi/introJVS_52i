// //Metodos de concatenacion

// let nombre = "Claudio";
// let apellido = "Garcia";
// let texto = "   Bienvenido a su clase  ";

// console.log(nombre + " " + apellido);
// console.log(nombre, apellido);

// //Template string
// console.log(`Mi nombre es ${nombre} ${apellido}`);

// //Ejemplo con number
// let num1 = 67;
// let num2 = 27;

// console.log(`la suma de ${num1} con ${num2} es igual a ${num1 + num2}`);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

//METODOS DE STRING

// //Pasar todo el string a Mayusculas
// console.log(nombre.toUpperCase());

// //Pasar todo el string a Minusculas
// console.log(nombre.toLowerCase());

// //Cantidad de caracteres
// console.log(apellido.length);

// //Eliminar caracteres
// //.trim
// console.log(texto.trim().length);

// //Obtener un solo caracter
// //.charAt()
// console.log(apellido.charAt(2));

// //Ultimo caracter
// console.log(apellido.charAt(apellido.length - 1));

//Obtener una parte de la cadena de string
//.substring();

// console.log(apellido.substring(2));
// console.log(apellido.substring(0, 4));

// //Saber si incluye algun caracter especifico
// //.includes();
// console.log(apellido.includes("n"));

// //Arrays

// const ARRAY1 = [1, 2, 3];
// console.log(ARRAY1.includes(2));

// const MASCOTA = ["gato", "perro", "rata"];
// console.log(MASCOTA.includes("perro"));

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

//.at
let alumno = "Giancarlo";
console.log(alumno.at(3));

//SPLIT
//Separa un string y lo convierte en ARRAY
console.log(alumno.split("r"));

let frase = "Hola_comision_52i";
console.log(frase.split("_"));

let arrayFrase = frase.split("_");
console.log(arrayFrase);

//.JOIN
//Unir un array

let nuevaFrase = arrayFrase.join("_");
console.log(nuevaFrase);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
