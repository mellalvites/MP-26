
// Crear una clase

class Bicicleta {
    constructor(numeroRuedas,color,tipo,marchas) {

        // Propiedades

        this.numeroRuedas = numeroRuedas
        this.color = color
        this.tipo = tipo
        this.marchas = marchas
    }

        // Métodos

        pintarBicicleta(colorNuevo){
        this.color = colorNuevo
    }
}


const bicicletaRoja = new Bicicleta(2,'rojo','BMX',1)

console.log(bicicletaRoja)

bicicletaRoja.pintarBicicleta('amarillo')

console.log(bicicletaRoja)