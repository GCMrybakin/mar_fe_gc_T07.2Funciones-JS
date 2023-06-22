//6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
//(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
//pasando el número por parámetro devolverá el número de cifras.

const numero = prompt("Introduce un numero:");


function contarCifras(numero) {
    let myFunc = num => Number(num);
    var intArr = Array.from(String(numero), myFunc);

    return intArr.length;
}

console.log("Cantidad de cifras en el numero: "+contarCifras(numero)+"\nNumero: "+numero);