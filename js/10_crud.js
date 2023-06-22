//CRUD
/*
Create

Read

Update

Delete

*/

//Tarea para terminar los metodos sobre arregloS

/*Lista de compras
a-agregar un producto a la lista de compras
b-listar de manera numerada
c-eliminar un producto POR SU INDICE (ID)
d-buscar un producto
e-filtrar productos por letra o palabra
f-modificar un producto*/

const lista = [
  "PAN",
  "MERMELADA",
  "QUESO",
  "AZUCAR",
  "MAYONESA",
  "FIDEOS",
  "POLENTA",
  "CHOCOLATE",
];
console.log(lista);

//Agregar productos

const agregarProducto = () => {
  let producto = prompt("Ingrese un producto:");
  console.log(producto);
  while (producto) {
    lista.push(producto.toUpperCase());
    alert(`El producto ${producto} se guardo correctamente!`);
    producto = prompt("Ingrese un producto:");
  }
  alert("Finalizo el ingreso de productos!😃");
};

// console.log(agregarProducto());
console.log(lista);

//Listar producto

const listarProducto = () => {
  document.body.innerHTML = "";
  document.write("<h1>");
  document.write("Lista de productos");
  document.write("</h1>");
  //Crear la lista
  if (lista.length > 0) {
    document.write("<ol>");
    lista.forEach((producto) => {
      document.write("<li>");
      document.write(producto);
      document.write("</li>");
    });
    document.write("</ol>");
  } else {
    document.write("No hay productos en la lista");
  }
};

listarProducto();

//Borrar producto

const borrarProducto = (
  producto = prompt("Ingrese el producto a eliminar:")
) => {
  if (producto) {
    let indice = lista.indexOf(producto.toUpperCase());

    if (indice > -1) {
      let confirmarEliminacion = confirm(
        `Esta seguro que desea eliminar el producto ${lista[indice]}?`
      );
      if (confirmarEliminacion) {
        lista.splice(indice, 1);
        alert("El producto se elimino");
      }
    } else {
      alert("El producto no se encuentra!");
    }
  } else {
    alert("Se cancela la operacion!");
  }
};

//Filtrar producto:

const filtrarProducto = (termino = prompt("Ingrese el termino a buscar")) => {
  if (termino) {
    let resultado = lista.filter((item) => {
      return item.includes(termino.toUpperCase());
    });
    console.log(resultado);

    if (resultado.length > 0) {
      console.log("Productos encontrados");
      for (let i = 0; i < resultado.length; i++) {
        console.log(`${i + 1} - ${resultado[i]}`);
      }
    } else {
      alert("No se encuentran coincidencias");
    }
  } else {
    alert("se cancelo la operacion");
  }
};

//Modificar producto:

const modificarProducto = (
  producto = prompt("Ingrese el producto a modificar:")
) => {
  if (producto) {
    let indice = lista.indexOf(producto.toUpperCase());
    if (indice > -1) {
      let nuevoNombre = prompt("Ingrese el nuevo nombre:");
      if (nuevoNombre) {
        lista.splice(indice, 1, nuevoNombre.toUpperCase());
        alert("El producto fue modificado");
      } else {
        alert("Se cancelo la operacion");
      }
    } else {
      alert("No se encontro el producto");
    }
  } else {
    alert("Se cancelo la operacion");
  }
};
