
//ejercicio 14
//Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.


function potencia(numero) {
    if (numero <= 0) {
        return false;
    }
    
    while (numero > 1) {
        if (numero % 2 !== 0) {
            return false;
        }
        numero /= 2;
    }
    
    return true;
}

console.log(potencia(16)); // Output: true
console.log(potencia(12)); // Output: false
console.log(potencia(64)); // Output: true

