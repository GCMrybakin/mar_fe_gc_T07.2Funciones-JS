//9. Crea un array de números donde le indicamos por prompt el tamaño del array,
//rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
//valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método
//para rellenar el array(que tenga como parámetros los números entre los que tenga que
//generar) y otro para mostrar el contenido y la suma del array.

let arrayNumeros = [];

function generarArray() {
    let tamaño = prompt("Introduce el tamaño del array:");

    for (let i = 0; i < tamaño; i++) {
        arrayNumeros.push(Math.floor(Math.random() * 10))
    }
}

function mostrarArray(arrayNumeros) {
    let suma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        console.log("Índice: " + i + ", Valor: " + arrayNumeros[i]);
        suma += arrayNumeros[i];
    }

    console.log("Suma total: "+suma);
}

generarArray();
mostrarArray(arrayNumeros);