//ejercicio 7
//Funcion para todos los factoriales 
function facto(numero) {
    const factores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            factores.push(i);
        }
    }
    return factores;
}

// Casos de uso
console.log(facto(12)); // Output: [1, 2, 3, 4, 6, 12]
console.log(facto(25)); // Output: [1, 5, 25]
console.log(facto(20)); // Output: [ 1, 2, 4, 5, 10, 20 ]
