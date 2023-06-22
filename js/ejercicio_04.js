//4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
//realizará mediante un método al que le pasamos el número como parámetro. Para
//calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo,
//si introducimos un 5, realizará esta operación 5*4*3*2*1=120.

let numero = prompt("Introduce un numero:");

function factorial(numero) {
    if(numero==0) {
        return 1;
    }
    return numero * factorial(numero-1);
}

console.log(factorial(numero));