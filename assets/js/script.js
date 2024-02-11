//prompt que solicita numero a usuario
var numero = parseInt(prompt('Ingresa un número:'));

if (validarNumero(numero)) {
    generarTablasYFactoriales(numero);
}
