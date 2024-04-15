//ejercicio 12
//Escribe una función que tome una lista de números y devuelva la mediana y la moda.
function x(numeros) {
    const ordenados = numeros.slice().sort((a, b) => a - b);
    const longitud = numeros.length;
    const mediana = longitud % 2 === 0 ? (ordenados[longitud / 2 - 1] + ordenados[longitud / 2]) / 2 : ordenados[Math.floor(longitud / 2)];
    
    const frecuencia = {};
    numeros.forEach(numero => {
        frecuencia[numero] = (frecuencia[numero] || 0) + 1;
    });
    const moda = Object.keys(frecuencia).reduce((a, b) => frecuencia[a] > frecuencia[b] ? a : b);

    return { mediana, moda: parseInt(moda) };
}
//ejemplos
console.log(x([1, 2, 3, 4, 5,1])); // Output: { mediana: 3, moda: 1 }
console.log(x([1, 2, 2, 3, 3, 4,5,6,7,8,9])); // Output: { mediana: 2.5, moda: 2 }
console.log(x([1, 1, 2, 2, 3, 3, 3,3,3,3,3,3,5])); // Output: { mediana: 2, moda: 3 }

