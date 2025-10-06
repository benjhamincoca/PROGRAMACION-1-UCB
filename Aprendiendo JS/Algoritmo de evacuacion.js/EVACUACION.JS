// CLASE PASAJERO
class Pasajero {
  // Atributos
  nombre = "";
  edad = 0;
  genero = "";
  tipo_boleto = "";

  // Constructor
  constructor(paramNombre, paramEdad, paramGenero, paramTipoboleto) {
    this.nombre = paramNombre;
    this.edad = paramEdad;
    this.genero = paramGenero;
    this.tipo_boleto = paramTipoboleto;
  }

  // Setters
  setNombre(paramNombre) { this.nombre = paramNombre; }
  setEdad(paramEdad) { this.edad = paramEdad; } 
  setGenero(paramGenero) { this.genero = paramGenero; }
  setTipoboleto(paramTipoboleto) { this.tipo_boleto = paramTipoboleto; }

  // Getters
  getNombre() { return this.nombre; }
  getEdad() { return this.edad; }
  getGenero() { return this.genero; }
  getTipoboleto() { return this.tipo_boleto; }

  // Mostrar los valores de los atributos
  toString() {
    return `Pasajero: ${this.getNombre()} | Edad: ${this.getEdad()} | Género: ${this.getGenero()} | Boleto: ${this.getTipoboleto()}`;
  }
}

// CLASE BOTE RESCATE
class BoteRescate {
  maximo_pasajeros = 0;

  constructor(paramMaximo_pasajeros = 10, parampasajeros = []) { 
    this.maximo_pasajeros = paramMaximo_pasajeros;
    this.lista_pasajeros = parampasajeros;
  }

  // Setters
  setMaximoPasajeros(paramMaximo_pasajeros) { this.maximo_pasajeros = paramMaximo_pasajeros; }
  setListaPasajeros(paramlista_pasajeros) { this.lista_pasajeros = paramlista_pasajeros; }

  // Getters
  getMaximoPasajeros() { return this.maximo_pasajeros; }
  getListaPasajeros() { return this.lista_pasajeros; }

  // Método para agregar pasajero
  agregarPasajero(pasajero) {
    if (this.lista_pasajeros.length < this.maximo_pasajeros) {
      this.lista_pasajeros.push(pasajero);
      return true; // pudo subir
    } else {
      return false; // bote lleno
    }
  }

  // Mostrar lista de pasajeros
  mostrarPasajeros() {
    if (this.lista_pasajeros.length === 0) {
      return "Bote vacío";
    }
    return this.lista_pasajeros.map(p => p.toString()).join("\n");
  }
}
