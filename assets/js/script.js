//prompt que solicita numero a usuario
var numero = parseInt(prompt('Ingresa un número:'));

if (validarNumero(numero)) {
    generarTablasYFactoriales(numero);
}

// Valida que el numero esté entre 1 y 20
function validarNumero(numero) {
    if (numero >= 1 && numero <= 20) {
        return true; // El número es válido
    } else {
        console.log("Por favor, ingresa un número entre 1 y 20.");
        return false; // El número no es válido
    }
}


// Calcular y mostrar la multiplicación
function generarTablasYFactoriales(numero) {
    // Generar tablas de multiplicar
    for (let i = 1; i <= numero; i++) {
        for (let j = numero; j <= numero; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }