// //BUCLES
// /*Para hacer tareas repatitivas*/

// /*
// while(condicion){
//     #accion
// }
// */

// // let vecesAsumar = 4; //Iterador
// // let totalSuma = 0;

// // while (vecesAsumar > 0) {
// //   totalSuma += 10;
// //   vecesAsumar --; //vecesAsumar = vecesAsumar -1;
// //   console.log(
// //     `Total de la suma: ${totalSuma} | veces que quedan por sumar ${vecesAsumar} `
// //   );
// // }

// // console.log(`Total: ${totalSuma}`);

// // ------------------------------------------------------------------------------------------

// //Tablas de multiplicar

// let tabla = 2;
// let valor = 1; //iterador

// while (valor <= 10) {
//   console.log(`${tabla} x ${valor} = ${tabla * valor}`);
//   valor++;
// }

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// //DO WHILE

// //Sintaxis

// /*
// do{

// }while(condicion);
// */

// let vueltas = 3;
// let respuestas = "";

// do {
//   //accion: de esta manera ejecuta por lo menos una vez
//   respuestas = prompt("Ingrese un nombre");
//   console.log(`Hola ${respuestas}! Bienvenide!`);
//   vueltas--;
// } while (vueltas > 0); //condicion

// ------------------------------------------------------------------------------------------
//TRIVIA

/*EJERCICIO TIPO TRIVIA, DONDE SE PREGUNTE LA CAPITAL DE UN PAIS,
EL USUARIO TENDRA 3 POSIBILIDADES. SI FALLA PIERDE*/

let respuestaCorrecta = "PARIS";
let acierto = false;
let contador = 3;

while (contador > 0 && acierto == false) {
  let respuestaUsuario = prompt("Cual es la capital de Francia");
  if (respuestaUsuario.toUpperCase() == respuestaCorrecta) {
    acierto = true;
    console.log("Excelente! ACERTASTE! 😎");
  } else {
    contador--;
    console.log(`Te quedan ${contador} intentos!😅`);
  }
}

if (acierto == false) {
  console.warn("Lo sentimos, acabas de perder! 😪");
}
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
