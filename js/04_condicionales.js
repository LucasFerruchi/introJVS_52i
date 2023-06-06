//ESTRUCTURAS DE CONTROL

//CONDICIONALES

// //Simple
// //IF

// let billetera = 2;

// //Sintaxis

// if (billetera > 0) {
//   console.log("Tienes dinero!");
//}

// ------------------------------------------------------------------------------------------

// //Doble
// //IF ELSE

// let cajaAhorro = 0;

// if (cajaAhorro > 0) {
//   console.log("Tienes dinero disponible 😁");
// } else {
//   console.log("No hay dinero disponible 😑");
// }

// ------------------------------------------------------------------------------------------

// //ANIDADAS

// //Num par o impar

// let numero = parseInt(prompt("Ingrese un numero entero"));
// console.log(numero);

// //isNaN() - Devuelve true (string) o false (number)

// if (isNaN(numero)) {
//   console.log("El valor ingresado no es un numero");
// } else {
//   if (numero % 2 == 0) {
//     console.log(`El numero ${numero} es par!!`);
//   } else {
//     console.log(`El numero ${numero} es impar`);
//   }
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// //Ejercicio TIENDA

// /*En una tienda hay descuentos depende el monton de la venta:
// .Debe ingresar el monto de la venta y el sistema debe calcular el descuento y restarlo del total:
// 1-Si el monto es menor de 500, no hay descuento
// 2-si es entre 500-1000 inclusive, descuento del 5%,
// 3-entre 1000 y 7000 inclusive, 11%.
// 4-7000 y 15000 inclusive, 18%.
// 5-mas de 15000, 25%.*/

// let monto = parseFloat(prompt("Ingrese el monto de la compra!"));
// console.log(monto);
// let descuento = 0;
// let montoConDescuento = 0;

// if (!isNaN(monto)) {
//   if (monto < 500) {
//     console.log("Montos menores a 500 no tienen descuento!");
//   } else if (/*monto >= 500 &&*/ monto <= 1000) {
//     descuento = monto * 0.05;
//     montoConDescuento = monto - descuento;
//     console.log(
//       `El monto a pagar con el descuento del 5% es $${montoConDescuento}`
//     );
//   } else if (monto <= 7000) {
//     descuento = monto * 0.11;
//     montoConDescuento = monto - descuento;
//     console.log(
//       `El monto a pagar con el descuento del 11% es $${montoConDescuento}`
//     );
//   } else if (monto <= 15000) {
//     descuento = monto * 0.18;
//     montoConDescuento = monto - descuento;
//     console.log(
//       `El monto a pagar con el descuento del 18% es $${montoConDescuento}`
//     );
//   } else {
//     descuento = monto * 0.25;
//     montoConDescuento = monto - descuento;
//     console.log(
//       `El monto a pagar con el descuento del 25% es $${montoConDescuento}`
//     );
//   }
// } else {
//   console.warn("El monto ingresado no es valido!");
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//Ejercicio fiesta
//Solo pueden ingresar personas de 18 o mayores
//Acompañadas por un tutor

// let edad = 16;
// let tutor = true;

// // if (edad >= 18) {
// //   console.log("Bienvenido a la fiesta!");
// // } else if (tutor) {
// //   console.log("Puedes ingresar, en compañia de tu tutor!");
// // } else {
// //   console.log("No puede ingresar!");
// // }

// if (edad >= 18 || tutor) {
//   console.log("Bienvenido a la fiesta!");
// } else {
//   console.log("No puede ingresar");
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//SWITCH
//Sintaxis

/*
switch (key) {
  case value:
    break;
  case value:
    break;
  case value:
    break;
    default:
      break;
}
*/

let edad = 14;

switch (edad) {
  case 16:
    console.log("Corresponde Aula A");
    break;
  case 17:
    console.log("Corresponde Aula B");

    break;
  case 18:
    console.log("Corresponde Aula C");

    break;
  default:
    console.log("No puede ingresar!");
    break;
}

// ------------------------------------------------------------------------------------------
//Date

let dia = new Date().getDay();

switch (dia) {
  case 0:
    console.log("Hoy es Domingo! 😁");
    break;
  case 1:
    console.log("Hoy es Lunes! 😁");
    break;
  case 2:
    console.log("Hoy es Martes! 😁");
    break;
  case 3:
    console.log("Hoy es Miercoles! 😁");
    break;
  case 4:
    console.log("Hoy es Jueves! 😁");
    break;
  case 5:
    console.log("Hoy es Viernes! 😁");
    break;
  case 6:
    console.log("Hoy es Sabado! 😁");
    break;
  //Default
}

// ------------------------------------------------------------------------------------------
//COMO MODIFICAR EL SWITCH

let resultado = 0;
let elemento = "8";

switch (true) {
  case elemento >= 6 && elemento <= 10:
    resultado = Math.pow(elemento, 2);
    console.log(`El numero ${elemento} elevado al cuadrado es ${resultado} `);
    break;
  case elemento >= 1 && elemento <= 5:
    resultado = elemento + elemento;
    console.log(`El numero sumado consigo mismo es ${resultado}`);
    break;
  default:
    console.log("Hasta luego! 😊");
    break;
}

// ------------------------------------------------------------------------------------------
//Ejercicio verduleria
//Pedir una fruta o verdura
//Si esta disponible la mercaderia y me informe el precio

let mercaderia = prompt("Ingrese la mercaderia deseada!");

switch (mercaderia) {
  case "manzana":
  case "MANZANA":
    console.log("El precio del kilo de manzana es $500");

    break;
  case "durazno":
    console.log("El precio del kilo de durazno es $800");

    break;
  case "naranja":
    console.log("El precio del kilo de naranja es $700");

    break;
  case "frutilla":
  case "mango":
    console.log("El precio del kilo de frutilla o mango es $900");

    break;

  default:
    console.log(`'Lo sentimos, no hay ${fruta}!`);
    break;
}
// ------------------------------------------------------------------------------------------
// let fruta = prompt("Ingrese una fruta");

// switch (fruta) {
//     case "Manzana":
//         console.log("La Manzana sale 100$ cada una o 700$ el kg");
//         break;
//     case "Pera":
//         console.log("La Pera sale 50$ cada una o 400$ el kg");
//         break;
//     case "Naranja":
//         console.log("La Naranja sale 100$ cada una o 700$ el kg");
//         break;

//     default:
//         console.log("No tenemos esa fruta disponible!");
//         break;
// }
// ------------------------------------------------------------------------------------------
// let vegetal = prompt("Introduzca una fruta o verdura");

// switch(true) {
//     case vegetal == "manzana":
//     console.log("Manzana esta disponible y cuesta $30/kilo");
//     break;
//     case vegetal == "uvas":
//     console.log("Uvas esta disponible y cuesta $30/kilo");
//     break;
//     default:
//     console.log("La verdura no esta disponible");
//     break;

// }
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
