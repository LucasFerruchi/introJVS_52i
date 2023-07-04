let relojID = document.getElementById("reloj");

let reloj = null;

const mostrarReloj = () => {
  let hora = new Date().getHours();
  let minutos = new Date().getMinutes();
  let segundos = new Date().getSeconds();

  if (hora <= 9) {
    //hora = `0${hora}`;
    hora = `0${new Date().getHours()}`;
  }
  if (minutos <= 9) {
    //minutos = `0${minutos}`;
    minutos = `0${new Date().getMinutes()}`;
  }
  if (segundos <= 9) {
    //segundos = `0${segundos}`;
    segundos = `0${new Date().getSeconds()}`;
  }

  reloj = `${hora} : ${minutos} : ${segundos}`;

  relojID.innerText = reloj;
};

setInterval(() => {
  mostrarReloj();
}, 1000);
