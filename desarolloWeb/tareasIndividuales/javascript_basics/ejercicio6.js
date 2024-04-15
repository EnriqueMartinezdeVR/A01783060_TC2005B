//ejercicio 6
//Crea una función que cambie una cadena de texto a 'Hacker Speak'.
function HackerSpeak(cadena) {
    const hackerChars = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5'
    };
    
    return cadena.split('').map(char => hackerChars[char.toLowerCase()] || char).join('');
}

// Casos de uso

console.log(HackerSpeak("Javascript es divertido")); // Output: "J4v45cr1pt 35 d1v3rt1d0"
console.log(HackerSpeak("Mi nombre es enrique")); // Output: "M1 n0mbr3 35 3nqu1qu3"
console.log(HackerSpeak("Esta tarea me gusto")); // Output: "35t4 t4r34 m3 gu5t0"
