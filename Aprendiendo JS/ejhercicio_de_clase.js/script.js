function mostrarNombre() {
    const nombre = document.getElementById("nombre").value;
    const resultado = document.getElementById("resultado");

    if (nombre.trim() === "") {
        resultado.textContent = "Por favor, ingresa un nombre.";
    } else {
        resultado.textContent = "Hola, " + nombre + "!";
    }
}

var lista = [];

function Insertarlista() {
    var valorAleatorio = Math.floor(Math.random() * 10);
    const listaElementos = document.getElementById("lista-elementos");

    // Crear el elemento de lista (<li>)
    const nuevoElemento = document.createElement("li");
    
    // Crear el botón
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = valorAleatorio;
    nuevoBoton.className = "lista-btn"; // Asignar una clase para el CSS

    // Agregar el botón al elemento de lista
    nuevoElemento.appendChild(nuevoBoton);

    // Agregar el elemento de lista al <ul> del HTML
    listaElementos.appendChild(nuevoElemento);

    // Opcional: limpiar el campo de entrada
    document.getElementById("nombre").value = "";
    document.getElementById("resultado").textContent = "";
}