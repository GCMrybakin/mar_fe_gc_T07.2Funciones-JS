//12. Crea un array de números de un tamaño pasado por prompt, el array contendrá números
//aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
//nosotros le indiquemos por prompt (debes controlar que se introduce un número
//correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10
//posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc

let array = [];

let tamaño = prompt("Introduce el tamaño del array:");

for (let i = 0; i < tamaño; i++) {
    array.push(Math.floor(Math.random() * 300))
}

console.log("Array generada aleatoriamente: "+array);

function ultimoDigitoArray(array) {
    let digito = parseInt(prompt("Introduce un dígito (0-9):"), 10);
    let nuevaArray = [];

    if (digito >= 0 && digito <= 9) {
        for (let i = 0; i < array.length; i++) {
            let numero = array[i];
            let ultimoDigito = numero % 10;
            if (ultimoDigito === digito) {
                nuevaArray.push(numero);
            }
        }
    } else {
        console.log("El dígito ingresado no es válido (0-9).");
    }

    console.log("Nueva array con el dígito especificado: " + nuevaArray);
}

ultimoDigitoArray(array);