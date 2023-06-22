//2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
//por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre
//qué números queremos que los genere, podemos pedirlas al usuario antes de generar
//los números. Este método devolverá un número entero aleatorio. Muestra estos
//números por consola

let minimo = prompt("Cantidad minima de numeros para generar:");
let maximo = prompt("Cantidad maxima de numeros para generar:");

function randomGeneradorInts(minimo, maximo) {
    const numerosAleatorios = [];

    minimo = Math.ceil(minimo);
    maximo = Math.floor(maximo);

    for (let i = 0; i < maximo; i++) {
        const numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        numerosAleatorios.push(numero);
    }
    return numerosAleatorios;
}

const numerosGenerados = randomGeneradorInts(minimo, maximo);
console.log("Números generados:", numerosGenerados);
