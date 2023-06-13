//FUNCIONES

/*
Procedimientos encapsulados, reutilizables
*/

//TIPOS

//DECLARATIVAS
//ANONIMAS

// ------------------------------------------------------------------------------------------
//DECLARATIVAS

/*
Sintaxis: 

function nombre (){
    #accion
}

*/

//Ej:

let nombre = "Santiago";
let apellido = "Gonzalez";

function saludarPersona(parametro1, parametro2) {
  console.log(`Hola ${parametro1} ${parametro2}`);
}

// saludarPersona(nombre, apellido);

// ------------------------------------------------------------------------------------------
//Funcion para sumar valores

let valorA = 87;
let valorB = 17;

function sumarValores(valor1 = 12, valor2 = 34) {
  if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Algun valor ingresado no es un numero");
  } else {
    console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
  }
}

sumarValores(valorA, valorB);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//ANONIMAS O DE EXPRESION

/*
Sintaxis:

const nombre = function (){
    #accion
}

*/

const saludarAlumno = function (nombre) {
  console.log(`Hola ${nombre} 🤩`);
};

saludarAlumno("Josefina");

// ------------------------------------------------------------------------------------------
//Calculadora

const calculadora = function (valor1, operacion, valor2) {
  if (isNaN(valor1) || isNaN(valor2)) {
    console.log("El valor ingresado no es un numero!");
  } else {
    switch (operacion) {
      case "+":
      case "suma":
        console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
        break;
      case "-":
      case "resta":
        console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`);
        break;
      case "x":
      case "multiplicacion":
        console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`);
        break;
      case "/":
      case "division":
        console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`);
        break;
      default:
        console.warn("La operacion solicitada no es valida!");
        break;
    }
  }
};

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//Descuentos

//Funcion declaraiva

calcularDescuento(3000, 20);

function calcularDescuento(precio, descuento = 15) {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  console.log(`El importe a abonar e ${montoConDescuento}`);
}

//Funcion anonima

const calcularDescuento2 = function (precio, descuento = 15) {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  console.log(`El importe a abonar e ${montoConDescuento}`);
};

calcularDescuento2(4000, 25);

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//RETURN

/*Que hace?
a-detiene a la funcion
b-devuelve un resultado
*/

const calcularDescuento3 = function (precio, descuento = 15) {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  console.log(`EL IMPORTE ES ${montoConDescuento}`);
  return `El importe a abonar es ${montoConDescuento}`;
  console.log("Salio bien!");
};

calcularDescuento3(8000, 30);

// ------------------------------------------------------------------------------------------
//EJERCICIO CON RETURN - CALCULAR EL CUBO

function cubo(num) {
  return Math.pow(num, 3);
}

console.log(cubo(7));

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//ARROW FUNCTION o FUNCION DE FLECHA

/*

Sintaxis:

const nombre = () => {
    #accion
    return ...
}

*/

//FUNCION ANONIMA
const cuboAnonima = function (num) {
  return Math.pow(num, 3);
};
console.log(cuboAnonima(7));

//ARROW FUNCTION
const cuboArrow = (num) => {
  return Math.pow(num, 3);
};
console.log(cuboArrow(7));

//EN UNA SOLA LINEA

const cuboArrow1 = (num) => Math.pow(num, 3);

console.log(cuboArrow1(7));

// ------------------------------------------------------------------------------------------
//CONVERTIR EL EJERCICIO DE LA CALCULADORA EN ARROW FUNCTION

const calculadoraArrow = (valor1, operacion, valor2) => {
  if (isNaN(valor1) || isNaN(valor2)) {
    console.log("El valor ingresado no es un numero!");
  } else {
    switch (operacion) {
      case "+":
      case "suma":
        console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
        break;
      case "-":
      case "resta":
        console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`);
        break;
      case "x":
      case "multiplicacion":
        console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`);
        break;
      case "/":
      case "division":
        console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`);
        break;
      default:
        console.warn("La operacion solicitada no es valida!");
        break;
    }
  }
};

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//SCOPE
//GLOBAL Y LOCAL

//global
let persona = "Juan";

const presentarPersona = () => {
  //local
  let persona = "Carla";
  return `Bienvenido/a ${persona}`;
};

console.log(presentarPersona());
