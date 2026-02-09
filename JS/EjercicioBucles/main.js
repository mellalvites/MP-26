// // Bucles

// for (let contador = 0; contador < 6; contador = contador +1){
//     console.log(`Estoy en la iteración número ${contador}`)
// }

// // Bucles for of

// const semana = ['Lunes', 'Martes', 'Miércoles','Jueves','Viernes'];

// for (const dia of semana){
//     console.log(dia)
// }

// // Bucles for in 

// for (const posicionDia in semana) {
//     console.log(posicionDia)
// }


// Ejercicio Bucles 
const palabras = ['Murciélago', 'tortilla', 'Mell', 'Javi Juez']

let palabraMasLarga

for (const palabra of palabras) {

    if (palabraMasLarga) {
        if (palabraMasLarga.length < palabra.length){

            palabraMasLarga = palabra

        }
    
    } else {
        palabraMasLarga = palabra
        
    }

    console.log(palabraMasLarga)   
}







