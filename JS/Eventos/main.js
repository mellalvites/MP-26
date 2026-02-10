const boton = document.getElementById('boton')

boton.addEventListener('click',botonHandler)

function botonHandler (eventoClick) {
    console.log(eventoClick)
}

const inputTexto = document.getElementById('input-texto')

inputTexto.addEventListener('change',inputTextoHandler)
function inputTextoHandler (eventoChange) {
    const textoUsuario = eventoChange.target.value
    const parrafoNuevo = document.createElement('p')
    parrafoNuevo.innerHTML = textoUsuario
    document.body.appendChild(parrafoNuevo) 


}


