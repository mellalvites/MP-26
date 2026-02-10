// Seleccionar los botones 

const botonCalcular = document.getElementById('boton-calcular')
const inputTexto = document.getElementById('numeros')
const botonReiniciar = document.getElementById('boton-reiniciar')


// Funcionalidad Botón Calcular

botonCalcular.addEventListener('click', botonCalcularHandler)
function botonCalcularHandler (eventoCalcularClick) {
    // Paso 1: recoger la información del input: 
    const textoNumeros = inputTexto.value
    
    // Paso 2: transformar a array de números 
    const arrayTexto = textoNumeros.split(",")
    const arrayNumeros = arrayTexto.map(function (numeroTexto){
        return Number(numeroTexto)
    })
    console.log(arrayTexto)
    console.log(arrayNumeros)
    
    // Paso 3: operaciones
    const suma = arrayNumeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    // console.log(suma)

    let suma2 = 0
    arrayNumeros.map(function(numero){
        suma2 = suma2 + numero
    })


    const media = suma2 / arrayNumeros.length
    console.log(suma2)
    // Valor Max y Min 

    const arrayOrdenados = arrayNumeros.sort()

    const max = arrayOrdenados[-1]
    const min = arrayOrdenados[0]

    console.log(arrayOrdenados)

    console.log(min)
    console.log(max)

    const textoResultado = `La suma de los números es ${suma2}, y la media de los números es ${media}`
    const parrafoNuevo = document.createElement('p')
    parrafoNuevo.innerHTML = textoResultado
    document.body.appendChild(parrafoNuevo)
}

botonReiniciar.addEventListener('click', botonReiniciarHandler)
function botonReiniciarHandler(eventoClick) {
    inputTexto.value = ''
    parrafoNuevo.innerHTML = ''
    textoResultado =''


}
