//Ejercicio 3
// Función que invierte un arreglo y devuelve un nuevo arreglo
function invertir(arreglo) {
    const nuevoArreglo = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        nuevoArreglo.push(arreglo[i]);
    }
    return nuevoArreglo;
}

function invertirmodificado(arreglo) {
    let inicio = 0;
    let fin = arreglo.length - 1
    while (inicio < fin) {
        const temp = arreglo[inicio];
        arreglo[inicio] = arreglo[fin];
        arreglo[fin] = temp;
        inicio++;
        fin--;
    }
    return arreglo; 
}

// Ejemplo de uso
const arregloO = [1, 2, 3, 4, 5];
const nuevoArreglo = invertir(arregloO.slice()); 
console.log("Arreglo invertido (nuevo):", nuevoArreglo); // Output: [5, 4, 3, 2, 1]

invertirmodificado(arregloO);
console.log("Arreglo invertido (modificado):", arregloO); // Output: [5, 4, 3, 2, 1]


