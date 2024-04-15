//Ejercicio 11
//Escribe una función que devuelva una nueva lista con todas las cadenas en orden alfabético.

function ordenar() {
    const lista = Array.from(arguments);
    for (let i = 0; i < lista.length - 1; i++) {
        for (let j = 0; j < lista.length - i - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                const temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    return lista;
}

// Casos de uso
console.log(ordenar("Daniel", "Joss", "Jero", "Hawaii", "Enrique")); // Output: ["Daniel", "Enrique", "Hawaii", "Jero", "Joss"]
console.log(ordenar("barca", "madrid", "juventus", "inter de milan")); // Output: ["barca", "inter de milan", "juventus", "madrid"]
console.log(ordenar("uno", "dos", "tres", "cuatro", "cinco", "seis")); // Output: ["cinco", "cuatro", "dos", "seis", "tres", "uno"]

