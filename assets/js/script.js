// Prompt que solicita número al usuario
let numero = parseInt(prompt('Ingresa un número:'));

// Valida que el número esté entre 1 y 20 (arrow function)
const validarNumero = (numero) => {
    if (numero >= 1 && numero <= 20) {
        return true; // El número es válido
    } else {
        console.log("Por favor, ingresa un número entre 1 y 20.");
        return false; // El número no es válido
    }
}

// Calcular y mostrar la multiplicación (arrow function)
const generarTablasYFactoriales = (numero) => {
    // Generar tablas de multiplicar
    for (let i = 1; i <= numero; i++) {
        for (let j = numero; j <= numero; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }

    // Calcular y mostrar los factoriales
    for (let i = 1; i <= numero; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        console.log(`Factorial de ${i} es: ${factorial}`);
    }
}

// Llamada a las funciones
if (validarNumero(numero)) {
    generarTablasYFactoriales(numero);
}
