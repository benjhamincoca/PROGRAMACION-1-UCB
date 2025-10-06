// Clase Pasajero
class Pasajero {
  constructor(nombre, edad, genero, clase) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero; // "Masculino" o "Femenino"
    this.clase = clase;   // "1ra", "2da", "3ra"
  }

  mostrarInfo() {
    return `${this.nombre} (${this.genero}, ${this.edad} años, Clase: ${this.clase})`;
  }
}

// Clase BoteRescate
class BoteRescate {
  constructor(capacidad) {
    this.capacidad = capacidad;
    this.ocupantes = [];
  }

  agregarPasajero(pasajero) {
    if (this.ocupantes.length < this.capacidad) {
      this.ocupantes.push(pasajero);
      return true;
    }
    return false;
  }

  mostrarOcupantes() {
    if (this.ocupantes.length === 0) return "Bote vacío";
    return this.ocupantes.map(p => p.mostrarInfo()).join("\n");
  }
}

// Algoritmo de evacuación
function evacuar(pasajeros, botes) {
  // Criterio: primero mujeres, luego niños (<18), luego clase del boleto
  pasajeros.sort((a, b) => {
    if (a.genero !== b.genero) {
      return a.genero === "Femenino" ? -1 : 1;
    }
    if ((a.edad < 18) !== (b.edad < 18)) {
      return a.edad < 18 ? -1 : 1;
    }
    const prioridadClase = { "1ra": 1, "2da": 2, "3ra": 3 };
    return prioridadClase[a.clase] - prioridadClase[b.clase];
  });

  let noRescatados = [];

  for (let pasajero of pasajeros) {
    let subio = false;
    for (let bote of botes) {
      if (bote.agregarPasajero(pasajero)) {
        subio = true;
        break;
      }
    }
    if (!subio) {
      noRescatados.push(pasajero);
    }
  }

  return noRescatados;
}

// ----- EJECUCIÓN DE LA SIMULACIÓN ----- //

// Crear pasajeros
let pasajeros = [
  new Pasajero("Ana", 25, "Femenino", "1ra"),
  new Pasajero("Luis", 30, "Masculino", "2da"),
  new Pasajero("María", 17, "Femenino", "3ra"),
  new Pasajero("Pedro", 40, "Masculino", "1ra"),
  new Pasajero("Lucía", 35, "Femenino", "2da"),
  new Pasajero("Carlos", 12, "Masculino", "3ra"),
  new Pasajero("Elena", 50, "Femenino", "1ra"),
  new Pasajero("Jorge", 28, "Masculino", "3ra"),
  new Pasajero("Sofía", 5, "Femenino", "2da"),
  new Pasajero("Andrés", 60, "Masculino", "1ra"),
];

// Crear botes
let botes = [
  new BoteRescate(3),
  new BoteRescate(4),
  new BoteRescate(2)
];

// Ejecutar evacuación
let noRescatados = evacuar(pasajeros, botes);

// Mostrar resultados
botes.forEach((bote, i) => {
  console.log(` Bote ${i + 1}:`);
  console.log(bote.mostrarOcupantes());
  console.log("-------------");
});

console.log("Pasajeros que quedaron fuera:");
if (noRescatados.length === 0) {
  console.log("Todos fueron rescatados 🎉");
} else {
  noRescatados.forEach(p => console.log(p.mostrarInfo()));
}
