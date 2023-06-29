//CLASES

/*Sintaxis

class Usuario {
  constructor(a, b, c) {
    //Propiedades
    this.a = a;
    this.b = b;
    this.c = c;
  }

  //Funciones
  function () {
    //accion
  }
}

*/
// ------------------------------------------------------------------------------------------
//Ejemplo:

class Usuario {
  constructor(nombre, username, password, estado = true) {
    this.nombre = nombre;
    this.username = username;
    this.pass = password;
    this.estado = estado;
  }

  //Funcion
  presentacion() {
    console.log("---Tarjeta de presentacion---");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Nombre de usuario: ${this.username}`);
  }

  //Funcion Cambiar estado
  cambiarEstado() {
    this.estado = !this.estado;
  }
}

let user1 = new Usuario("Lucas", "lferruchi", "123456789");
console.log(user1);
console.log(user1.presentacion());

let user2 = new Usuario("Luci", "lu1990", "hagvsfkasfh");
console.log(user2);

// ------------------------------------------------------------------------------------------
//Funciones por fuera de la clase

Usuario.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre}`);
};
user1.saludar();

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//HERENCIA

class Administrador extends Usuario {
  //Parametros y propiedades
  constructor(nombre, username, password, cargo, estado = true) {
    super(nombre, username, password, estado);
    this.cargo = cargo;
  }
  //Funciones
  presentacionAdmin() {
    this.presentacion();
    console.log(`Cargo: ${this.cargo}`);
  }
}

//Crear un Administrador
let admin1 = new Administrador(
  "Sebastian",
  "seba2020",
  "96468321",
  "Administrador"
);

//LLamar a administrador
console.log(admin1);

console.log(admin1.presentacion());
console.log(admin1.presentacionAdmin());

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//Ejercicio cuenta bancaria
/*Escribe un programa que cree un objeto "cuenta",
con las siguientes propiedades:
-una propiedad titular
-una propiedad saldo, teniendo como valor inicial 0.
-un metodo ingresar() que permita añadir dinero, pasando
la cantidad como parametro
-un metodo extraer() que permita retirar la cantidad
pasada como parametro
-un metodo informar() que retorne el estado de la cuenta
-Utiliza este objeto para mostrar la descripcion, ingresar y extraer dinero
y volver a mostrar la descripcion del estad de la cuenta*/

//A-Crear clase Cuenta

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  //Metodo ingresar
  ingresar(cantidad = 0) {
    if (cantidad > 0) {
      // this.saldo = this.saldo + cantidad;
      this.saldo += cantidad;
      console.log(`Se ingresaron $${cantidad} a la cuenta de ${this.titular}`);
      this.informar();
    } else {
      console.log("La cantidad ingresada debe ser mayor a cero.");
    }
  }

  //Metodo extraer
  extraer(cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(`Se extrajo $${cantidad}de la cuenta de ${this.titular}`);
      this.informar();
    } else {
      console.log("La cantidad ingresada es invalida!");
    }
  }

  //b-Informar
  informar() {
    console.log("----Estado de cuenta----");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
    console.log("------------------------");
  }
}

//Cuenta 1
const cuenta1 = new Cuenta("Ignacio");
console.log(cuenta1);

//Informar estado de cuenta
cuenta1.informar();

//Ingresar
cuenta1.ingresar(100);

//Extraer
cuenta1.extraer(50);
