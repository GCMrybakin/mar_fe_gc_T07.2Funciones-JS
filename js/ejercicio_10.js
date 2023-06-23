//10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números
//aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor
//de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
//hacer todos los métodos que necesites.

let arrayNumeros = [];

function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

function generarArray() {
    let tamaño = prompt("Introduce el tamaño del array:");

    while (arrayNumeros.length < tamaño) {
        let numero = Math.floor(Math.random() * 1000);
        if (esPrimo(numero) != false) {
            arrayNumeros.push(numero);
        } else {
            continue;
        }
    }
    for (let i = 0; i < arrayNumeros.length; i++) {
        console.log("Índice: " + i + ", Valor: " + arrayNumeros[i]);
    }
}

function numeroMasGrandeArray(arrayNumeros) {
    let numeroMasGrande = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        let numero = arrayNumeros[i];
        if (numero > numeroMasGrande) {
            numeroMasGrande = numero;
        }
    }

    console.log("El numero mas grande es: "+numeroMasGrande);
}

generarArray();
numeroMasGrandeArray(arrayNumeros);