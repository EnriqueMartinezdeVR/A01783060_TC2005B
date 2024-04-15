
//ejercicio 5
//Escribe una función que calcule el máximo común divisor de dos números.

//Escribe una función que calcule el máximo común divisor de dos números.
function maximodiv(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Casos de uso

console.log(maximodiv(12, 18)); // Output: 6
console.log(maximodiv(35, 49)); // Output: 7
console.log(maximodiv(15, 25)); // Output: 5
