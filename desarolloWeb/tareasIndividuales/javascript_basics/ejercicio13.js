//Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

// Ejercicio 13
function x(lista) {
    const frecuencia = {};
    let maxFrecuencia = 0;
    let cadenaMasFrecuente = null;
    
    for (const cadena of lista) {
        frecuencia[cadena] = (frecuencia[cadena] || 0) + 1;
        if (frecuencia[cadena] > maxFrecuencia) {
            maxFrecuencia = frecuencia[cadena];
            cadenaMasFrecuente = cadena;
        }
    }
    
    return cadenaMasFrecuente;
}

// Outputs
console.log(x(["a","a","a","a","ab","b","b","b","c","c","c","c","c","c","c","c"])); // Output: "c"
console.log(x(["por","por","por","por","que","que","no","no","no"])); // Output: "por"
console.log(x(["barca","barca","barca","barca","barca","barca","Mexico","Mexico","Ecuador"])); // Output: "barca"

