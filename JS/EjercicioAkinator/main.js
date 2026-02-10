const botonPrueba = document.getElementById('boton-prueba')
const inputNumero = document.getElementById('input-numero')

botonPrueba.addEventListener('click', botonPruebaHandler)
const numeroRandom = Math.round(Math.random()*100)
const intentos = []
function botonPruebaHandler(eventoClick) {
    console.log(numeroRandom)
    const numeroValor = inputNumero.value
    console.log(inputNumero.value)
    if (numeroValor == numeroRandom) {
        console.log('Acertaste')

    } else {
        intentos.push(inputNumero)
        console.log('Intentalo otra vez')
        if (numeroValor < numeroRandom) {
            const pista = document.getElementById('pista')
            pista.innerHTML = 'Demasiado bajo'
            document.body.appendChild(pista)
            console.log('Demasiado bajo')
        }
        else {
            console.log('Demasiado alto')
            const pista = document.getElementById('pista')
            pista.innerHTML = 'Demasiado alto'
            document.body.appendChild(pista)
        
        }

    }

    const numeroIntentos = document.getElementById('numero-intentos')
    numeroIntentos.innerHTML = intentos.length
    document.body.appendChild(numeroIntentos)
}

