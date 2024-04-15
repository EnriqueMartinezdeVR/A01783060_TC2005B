//ejecicio 9

//Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.
function long(lista) {
    let longitudMinima = lista[0].length;
    for (const cadena of lista) {
        if (cadena.length < longitudMinima) {
            longitudMinima = cadena.length;
        }
    }
    return longitudMinima;
}

// Casos de uso
console.log(long([ "cualquier"])); // Output: 9
console.log(long(["si", "no", "por", "tres"])); // Output: 2
console.log(long(["porque", "ola", "hola","lo"])); // Output: 2

