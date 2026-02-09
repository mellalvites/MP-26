// Seleccionar elementos en mi documento HTML

const subtitulo = document.getElementById("subtitulo");
console.log(subtitulo);

// function subtituloVisible () {
//     subtitulo.hidden = !subtitulo.hidden
// }
// subtitulo.hidden = true

// Cuidado porque es un NODELIST

const parrafos = document.querySelectorAll("p");
console.log(parrafos);

const parrafosPares = document.querySelectorAll(".parrafo-par");
console.log(parrafosPares);

parrafosPares.forEach((parrafo) => {
  parrafo.hidden = true;
});

// Crear Elementos

const parrafoNuevo = document.createElement("p");
const nodoTexto = document.createTextNode(
  "Este párrafo está creado dinámicamente a través de JS",
)

parrafoNuevo.appendChild(nodoTexto)

const divVacio = document.getElementById('div-vacio')

divVacio.appendChild(parrafoNuevo)
