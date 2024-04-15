
// Función para encontrar el primer carácter no repetido en una cadena
function p(cadena) {
    const recuento = {};
    
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        recuento[caracter] = (recuento[caracter] || 0) + 1;
    }
    
    for (let j = 0; j < cadena.length; j++) {
        if (recuento[cadena[j]] === 1) {
            return cadena[j];
        }
    }
    
     return null;
}

const cadena1 = 'abcdabcde';
console.log("El primer carácter no repetido en la cadena1 es:", p(cadena1));

const cadena2 = 'aabbccddeeffggh';
console.log("El primer carácter no repetido en la cadena2 es:", p(cadena2));

const cadena3 = 'abccba';
console.log("El primer carácter no repetido en la cadena3 es:", p(cadena3));
