//Clase
class Tarea {
  constructor(id, text, done = false) {
    this.id = id;
    this.text = text;
    this.done = done;
  }
}

// //Arreglo vacio
// let tareas = [];

//Traer info de la BD
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

//Capturar el contenedor
let contenedorTarjetas = document.getElementById("contenedor-tarjetas");

//Funcion de agregar tarjeta
const agregarTarjeta = (event) => {
  //Detener el submit
  event.preventDefault();

  //Capturar el VALUE del form
  let tarea = document.querySelector("#textTarea").value;

  //Validaciones
  if (tarea.length > 5) {
    //Crear Tarea(instancia), enviar a arreglo
    tareas.push(new Tarea(new Date().getTime(), tarea));

    //Enviar a BD
    localStorage.setItem("tareas", JSON.stringify(tareas));

    //Limpiar el form
    document.querySelector("#textTarea").value = "";

    //Imprimir
    listarTarjeta();
  }
};

//Funcion listarTarjeta

/*
Tarjeta

 <div class="col-12 col-md-6 offset-md-3 mb-2">
          <div class="card">
            <div class="card-body">
              <span>Texto de ejemplo</span>
            </div>
          </div>
        </div>

        

*/
const listarTarjeta = () => {
  //Limpiar el html del contenedor
  contenedorTarjetas.innerHTML = "";

  //Estructura de tarjeta
  //recorremos el arreglo
  tareas.map((item) => {
    //Creamos el contenedor de la tarjeta
    let columna = document.createElement("div");
    columna.classList = "col-12 col-md-6 offset-md-3 mb-2";

    //Creamos la tarjeta
    let tarjeta = `
    <div class="card">
            <div class="card-body d-flex justify-content-between align-items-center">
              <span class="${
                item.done ? "text-decoration-line-through" : ""
              }" onclick="marcarTarea(${item.id})">${item.text}</span>
              <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${
                item.id
              })">X</button>
            </div>
          </div>
    `;

    columna.innerHTML = tarjeta;

    contenedorTarjetas.append(columna);
  });
};

//Funcion eliminar tarea
const eliminarTarea = (id) => {
  //Obtener posicion del elemento
  let index = tareas.findIndex((item) => {
    return item.id == id;
  });
  //   console.log(index);

  //Eliminar una tarea
  tareas.splice(index, 1);

  //Actualizar la BD
  localStorage.setItem("tareas", JSON.stringify(tareas));

  //Listar
  listarTarjeta();
};

const marcarTarea = (id) => {};

listarTarjeta();
