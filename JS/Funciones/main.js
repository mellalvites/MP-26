// FUNCIONES 

function holaMundo () {
    console.log("Hola Mundo")
    // return ('Hola Mundo')
}

const salidaFuncion = holaMundo()
console.log(salidaFuncion)


//  Función sumar 2 números

function suma2 (numero1, numero2) {
    const suma = numero1 + numero2
    return suma

}

const resultado23 = suma2(2,3)

console.log(resultado23)


// Método .map

const arrayNumeros = [3,4,5,6,7,8,9]

const resultadoOperacion = arrayNumeros.map(function(numero,posicion){
    const multiplicacion = numero*2
    console.log(posicion)
    return multiplicacion

})


console.log(resultadoOperacion)


// Funciones de tipo flecha 

function sumaUno(parametro){
    return parametro +1

}

const sumaDos = (numero) =>{
    return numero + 2
}


const suma3 = sumaDos(3)

const resultadoFlecha = arrayNumeros.map(()=>{

})