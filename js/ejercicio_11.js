//11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
//rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
//del segundo array con valores aleatorios. Después, crea un método que tenga como
//parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0
//del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de
//cada array.

let array1 = [];
let array2 = [];

let tamaño = prompt("Introduce el tamaño del array:");

for (let i = 0; i < tamaño; i++) {
    array1.push(Math.floor(Math.random() * 10))
}

for (let i = 0; i < tamaño; i++) {
    array2.push(Math.floor(Math.random() * 10));
}

function multiplicarArrays(array1, array2) {
    let resultado = [];

    for (let i = 0; i < array1.length; i++) {
        resultado.push(array1[i] * array2[i]);
    }

    return resultado;
}

console.log("Array1:", array1);
console.log("Array2:", array2);

let resultadoMultiplicacion = multiplicarArrays(array1, array2);
console.log("Resultado de la multiplicación:", resultadoMultiplicacion);

