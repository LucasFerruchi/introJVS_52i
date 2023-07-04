//BOM - Objeto WINDOW

//LOCATION - assing, replace, reload

//NAVIGATOR - onLine

if (navigator.onLine) {
  console.log("Estas en linea");
} else {
  console.log("No tienes internet");
}
//-----------------------------------------
//navigator.deviceMemory

if (navigator.deviceMemory < 8) {
  console.log("Lo sentimos, memoria insuficiente!");
}

//-----------------------------------------
//navigator.geolocation

const miUbicacion = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const coordenadas = pos.coords;
    console.log("Tu ubicacion actual es:");
    console.log(`Latitud: ${coordenadas.latitude}`);
    console.log(`Longitud: ${coordenadas.longitude}`);
    console.log(`A unos ${coordenadas.accuracy} metros`);
  }

  function error(err) {
    console.warn(`Error ${err.code}: ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
};

//-----------------------------------------
//Funciones para manejar el tiempo

//!setInterval

let intervalo = null;

const fechaActual = () => {
  let fecha = "";
  intervalo = setInterval(() => {
    fecha = new Date();
    //Limpiar al documento
    document.body.innerText = "";
    document.write(`<h3>${fecha}</h3>`);
  }, 1000);
};

//!clearInterval

const detener = () => {
  clearInterval(intervalo);
};

//!setTimeout

const redirigir = () => {
  document.write("<h3>Redireccionando a la pagina principal!</h3>");
  setTimeout(() => {
    location.replace("https://www.google.com");
  }, 5000);
};

//-----------------------------------------
//-----------------------------------------
//DOM
