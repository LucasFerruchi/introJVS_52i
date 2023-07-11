//CLASE - CONSTRUCTOR
class Usuario {
  constructor(id, first_name, last_name, email, avatar) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.avatar = avatar;
  }
}

let data = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "http://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "http://reqres.in/img/faces/8-image.jpg",
  },

  {
    id: 9,
    email: "tobias.funque@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "http://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "http://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "http://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howel@reqres.in",
    first_name: "Rachel",
    last_name: "Howel",
    avatar: "http://reqres.in/img/faces/12-image.jpg",
  },
];

//CAPTURAR CONTENEDOR DE LAS CARDS
let contenedorCard = document.querySelector("#contenedor-cards");

//Traer la card
/*
COLUMNA
<div class="col">
             <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          TARJETA
         
*/

//RENDERIZAR la card
const listaUsuarios = () => {
  //a-Recorrer el arreglo
  data.forEach((item) => {
    //b-Crear los componentes
    let columna = document.createElement("div");
    columna.classList = "col";

    let tarjeta = `
    <div class="card h-100">
    <div class="text-center">
    <img src="${item.avatar}" class="card-img-top img-avatar " alt="${item.first_name}" />
    </div>
    <div class="card-body text-center">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <p class="card-text">
        ${item.email}
      </p>
    </div>
  </div>
    `;

    //Asignamos a html (COLUMNA-TARJETA)
    columna.innerHTML = tarjeta;

    //Configuramos los nodos
    contenedorCard.appendChild(columna);
  });
};

//Ordenar alfabeticamente
const ordenarApellido = (valor = 0) => {
  //a-probar el boton
  //   alert("Hola soy un evento!!");
  //e-Limpiar el HTMML
  contenedorCard.innerHTML = "";

  //b-Ordenar alfabeticamente
  data.sort((a, b) => {
    if (a.last_name < b.last_name) {
      return -1;
    } else if (a.last_name > b.last_name) {
      return 1;
    } else {
      return 0;
    }
  });

  //f-Ordenar de la Z-A
  if (valor != 0) {
    data.reverse();
  }

  //c-Imprimir lista
  listaUsuarios();
};

//Funcion para agregar usuario nuevo

const agregarUsuario = (event) => {
  //1-Detener el submit
  event.preventDefault();

  //2-Limpiar contenedor
  contenedorCard.innerHTML = "";

  //3-Crear id
  let id = data.at(-1).id + 1;

  //4-Capturar los datos de los input
  let first_name = document.querySelector("#nombre").value;
  let last_name = document.querySelector("#apellido").value;
  let email = document.querySelector("#email").value;
  let avatar = document.querySelector("#img").value;

  //5-Crear la clase usuario
  let usuario = new Usuario(id, first_name, last_name, email, avatar);

  //6-Agregar al arreglo el nuevo usuario
  data.push(usuario);

  //7-Limpiar el form
  document.querySelector("#nombre").value = "";
  document.querySelector("#apellido").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#img").value = "";

  //8-Imprimir
  listaUsuarios();
};

listaUsuarios();
