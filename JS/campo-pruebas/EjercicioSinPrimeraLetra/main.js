function sinPrimeraLetra (cadena1,cadena2) {
    const palabra1 = cadena1.substring(1)
    const palabra2 = cadena2.slice(1)
    const nuevaCadena = palabra1 + palabra2
    return nuevaCadena
}

console.log(sinPrimeraLetra('Hola','Mundo'))


function invertirPalabra(string) {
    let palabraInvertida = ''
    for (let i = string.length-1; i>=0 ;i--) {
        
        palabraInvertida = palabraInvertida.concat(string[i])
        
    }
    return palabraInvertida
}

console.log(invertirPalabra('hola'))





function numeroVocales(palabra) {
    const palabraMinuscula = palabra.toLowerCase()
    const vocales = ['a','e','i','o','u'] 
    contador = 0
    for (let p of palabraMinuscula) {
        for (let v of vocales) {
            if (p === v) {
                contador = contador + 1}
        }

    }
    return contador
}

console.log(numeroVocales('estres'))