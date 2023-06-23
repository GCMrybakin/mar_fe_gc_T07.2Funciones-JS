//8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
//por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
//valores y otro para mostrar.

let arrayNumeros = [];

function rellenarArray() {
    for (let i = 0; i < 10; i++) {
        let numero = prompt("Introduce un numero(10 veces):");
        arrayNumeros.push(numero);
    }    
}

function mostrarArray(arrayNumeros) {
    for (let i = 0; i < arrayNumeros.length; i++) {
        console.log("Índice: " + i + ", Valor: " + arrayNumeros[i]);
    }
}

rellenarArray();
mostrarArray(arrayNumeros);
