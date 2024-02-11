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