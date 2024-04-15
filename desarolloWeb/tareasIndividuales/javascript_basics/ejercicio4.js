//ejercicio 4
//Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
function capitalizarPrimerasLetras(cadena) {
    return cadena.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Casos de uso
console.log(capitalizarPrimerasLetras("hola mi nombre es enrique")); // Output: "Hola Mi Nombre Es Enrique"
console.log(capitalizarPrimerasLetras("que")); // Output: "Que"

console.log(capitalizarPrimerasLetras("si puedes hacer esto por mi")); // Output: "Si Puedes Hacer Esto Por Mi"
