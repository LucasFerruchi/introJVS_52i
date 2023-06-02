//BUCLES
/*Para hacer tareas repatitivas*/

/*
while(condicion){
    #accion
}
*/

// let vecesAsumar = 4; //Iterador
// let totalSuma = 0;

// while (vecesAsumar > 0) {
//   totalSuma += 10;
//   vecesAsumar --; //vecesAsumar = vecesAsumar -1;
//   console.log(
//     `Total de la suma: ${totalSuma} | veces que quedan por sumar ${vecesAsumar} `
//   );
// }

// console.log(`Total: ${totalSuma}`);

// ------------------------------------------------------------------------------------------

//Tablas de multiplicar

let tabla = 2;
let valor = 1; //iterador

while (valor <= 10) {
  console.log(`${tabla} x ${valor} = ${tabla * valor}`);
  valor++;
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//DO WHILE

//Sintaxis

/*
do{

}while(condicion);
*/

let vueltas = 3;
let respuestas = "";

do {
  //accion: de esta manera ejecuta por lo menos una vez
  respuestas = prompt("Ingrese un nombre");
  console.log(`Hola ${respuestas}! Bienvenide!`);
  vueltas--;
} while (vueltas > 0); //condicion
