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
//Ejercicio TIENDA

/*En una tienda hay descuentos depende el monton de la venta:
.Debe ingresar el monto de la venta y el sistema debe calcular el descuento y restarlo del total:
1-Si el monto es menor de 500, no hay descuento
2-si es entre 500-1000 inclusive, descuento del 5%,
3-entre 1000 y 7000 inclusive, 11%.
4-7000 y 15000 inclusive, 18%.
5-mas de 15000, 25%.*/

let monto = parseFloat(prompt("Ingrese el monto de la compra!"));
console.log(monto);

if (!isNaN(monto)) {
  if (monto < 500) {
    console.log("Montos menores a 500 no tienen descuento!");
  } else if (/*monto >= 500 &&*/ monto <= 1000) {
    let descuento = monto * 0.05;
    let montoConDescuento = monto - descuento;
    console.log(
      `El monto a pagar con el descuento del 5% es $${montoConDescuento}`
    );
  } else if (monto <= 7000) {
    let descuento = monto * 0.11;
    let montoConDescuento = monto - descuento;
    console.log(
      `El monto a pagar con el descuento del 11% es $${montoConDescuento}`
    );
  } else if (monto <= 15000) {
    let descuento = monto * 0.18;
    let montoConDescuento = monto - descuento;
    console.log(
      `El monto a pagar con el descuento del 18% es $${montoConDescuento}`
    );
  } else {
    let descuento = monto * 0.25;
    let montoConDescuento = monto - descuento;
    console.log(
      `El monto a pagar con el descuento del 25% es $${montoConDescuento}`
    );
  }
} else {
  console.warn("El monto ingresado no es valido!");
}

//TAREA...HACER EL EJERCICIO ANTERIOR DECLARANDO LAS VARIABLES DE MANERA "GLOBAL"
