// Ejercicio Condicionales 


// const num1 = 1
// const num2 = 3

// if (num1>num2) {
//     console.log(num1+num2)
// }
// if (num2 <0) {
//     console.log(num2*3)

// }

// if (num1+1<num2) {
//     const resultado3 = num2 - num1
//      console.log(`Deberías sumarle ${resultado3} al ${num2} para que sea igual a ${num2}`)

// }


// Ejercicio Año Bisiesto

// const año = 2020
// if (año%4==0) {
//     console.log("Puede ser bisiesto")
//     if (año%100==0){
//     if (año%400==0) {
//     console.log("Es bisiesto")
//     } else {
//     console.log("No es bisiesto")
//     }
//     }
//     else {
//     console.log("Es bisiesto")
//     } 
//     } 
//     else {
//     console.log("No es bisiesto")
//     }


// if ((año%4==0) && (año%100==0)) {
//     console.log("Es bisiesto")
// } 


// Ejercicio Más Cercano a 100

// const valor1 = 23
// const valor2 = 12
// if ((100-valor1)<(100-valor2)) {
//     console.log(`El valor más próximo a 100 es ${valor1}`)
// }

// if ((100-valor1)>(100-valor2)) {
//     console.log(`El valor más próximo a 100 es ${valor2}`)
// }

// Ejercicio DNI

arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

dni = window.prompt("Introduzca su DNI")

if (dni < 0 || dni > 99999999 || dni.length < 8) {
    alert("Introduce un número válido")}
else {
const resultado = dni % 23;
const letra = arrayLetras[resultado];
const dniString = new String(dni)
const dniCompleto = dniString + letra
    alert(`La letra del DNI es ${letra}. Tu DNI es ${dniCompleto}`)}


