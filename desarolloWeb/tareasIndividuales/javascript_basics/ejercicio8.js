//ejecicio 8
//Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan
function d(arreglo) {
    const x = [];
    // Recorremos el arreglo
    for (const elemento of arreglo) {
        if (!x.includes(elemento)) {
            x.push(elemento);
        }
    }
    return x;
}

// Casos de uso

console.log(d(["hola", "perro", "hola", "perro", ])); // Output: ["hola", "perro"]
console.log(d(["yo", "yo", "que", "ok", "que","ok","yo"])); // Output: ["yo", "ok","que"]
console.log(d([0, 5,0,1,7,7,7,8,8,8,8,9,9,9])); // Output: [ 0, 5, 1, 7, 8, 9 ]