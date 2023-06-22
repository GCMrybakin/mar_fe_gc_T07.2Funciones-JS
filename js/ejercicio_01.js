//1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
//Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá
//los valores necesarios para calcular el área. Para ello has de crear un método por cada
//figura para calcular cada área, este devolverá un número real. Muestra el resultado por
//consola.
//Aquí te mostramos que necesita cada figura:
//• Circulo: (radio^2)*PI
//• Triangulo: (base * altura) / 2
//• Cuadrado: lado * lado

let figura = prompt("Que figura quieres calcular el area?\n1-Circulo.\n2-Cuadrado.\n3-Triángulo.");

function areaCirculo(radio) {
    return 2 * Math.PI * radio;
}

function areaCuadrado(a, b) {
    let area = a * b;
    return area;
}

function areaTriangulo(base, altura) {
    let perimetro = 2 * (base + altura);
    return perimetro;
}

if (figura == 1) {
    let radio = prompt("Radio de la figura:")
    console.log(areaCirculo(radio));
} else if ( figura == 2) {
    let lado1 = prompt("Lado 1 del cuadrado:")
    let lado2 = prompt("Lado 2 del cuadrado:")
    console.log(areaCuadrado(lado1,lado2));
} else {
    let base = prompt("Base del triangulo:")
    let altura = prompt("Altura del triangulo:")
    console.log(areaTriangulo(base,altura));
}