let nombres = ["Pablo", "Lula", "Isabela", "Ignacio", "Raul"];
console.log(nombres);

//!Convertir a formatos JSON
JSON.stringify(nombres);
console.log(JSON.stringify(nombres));

//GUardar en una variable
let nombresJSON = JSON.stringify(nombres);
console.log(nombresJSON);

//Enviar a localStorage
localStorage.setItem("personas", nombresJSON);

//!NO HACER
localStorage.setItem("persona!", nombres);

//Obtener datos del localStorage
localStorage.getItem("personas");

JSON.parse(localStorage.getItem("personas"));
console.log(JSON.parse(localStorage.getItem("personas")));
