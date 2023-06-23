//7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
//otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
//parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
//devolverá ningún valor, mostrará un mensaje indicando el cambio.
//El cambio de divisas es:
//• 0.86 libras es un 1 €
//• 1.28611 $ es un 1 €
//• 129.852 yenes es un 1 €

let cantidad = prompt("Introduce una cantidad de euros.\n- 0.86 libras es un 1€\n- 1.28611 $ es un 1 €\n- 129.852 yees es un 1 €");
let moneda = prompt("Introduce la moneda a la que deseas convertir (libras, dolares, yenes):");

function convertidorMonedas(cantidad) {
    let cambio;

    switch (moneda) {
        case "libras":
            cambio = 0.86;
            break;
        case "dolares":
            cambio = 1.28611;
            break;
        case "yenes":
            cambio = 129.852;
            break;
        default:
            console.log("Moneda no válida.");
            return;
    }

    let resultado = cantidad * cambio;
    console.log(cantidad + " euros son " + resultado + " " + moneda);
}

convertidorMonedas(cantidad, moneda);
