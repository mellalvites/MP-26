//  Ejercicio Factorial

const numero = window.prompt("Introduzca un número")
const arrayFactorial = Array(numero)
while (numero != 0) {
    arrayFactorial.push(numero)
    numero = numero - 1

    for (num in arrayFactorial) {
        factorial = num*(num-1)
    }

}




