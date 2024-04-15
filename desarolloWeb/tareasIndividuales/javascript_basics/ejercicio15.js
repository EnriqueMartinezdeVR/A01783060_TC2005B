//ejercicio 15


//Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
function ordenar(numeros) {
    return numeros.slice().sort((a, b) => b - a);
}

console.log(ordenar([500,200,300,900,400,700])); // Output: [900, 700, 500, 400, 300, 200]
console.log(ordenar([80,12,26,40,6])); // Output: [80, 40, 26, 12, 6]


console.log(ordenar([7,5,3,1,5,9,8,4,6,2])); // Output: [9, 8, 7, 6, 5, 5, 4, 3, 2, 1]
