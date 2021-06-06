
//Ejercicio 1
// const numeros = [5, 7, 99, 34, 54, 2, 12];
// // const numeros2 = [5, 8, 26 ];


// const obtenerMenor = (array) =>{
//     let menor = numeros[0];
//     for (let i = 0; i < numeros.length ; i++){ 
//         if (menor > numeros [i]){
//             (menor=numeros[i])
        
//         }
//     }
//     return menor;
// }

// console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12]));

//---------------------Ejercicio 2
// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

// sumarNumeros([5, 7, 10, 12, 24]) // 58


// const sumarNumeros = (numeros) => {
//     let totalNumeros = 0;
//     for (let i = 0; i < numeros.length; i++) {
//         totalNumeros += numeros[i];
//     }
//     return totalNumeros
// }

// console.log(sumarNumeros([5, 7, 10, 12, 24]));

//-----------------------Ejercio 3
// contiene(numero, numeros)
// Crear una funci´ón contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false


// const contiene = (numeroAEncontrar, numeros) => {
    
//     for (const numero of numeros) {
//         if (numero === numeroAEncontrar) {
//             return true
//         } 
            
//     }
//             return false
// }

// console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]));
// console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]));

//------------------Ejercicio 4
// invertirCaso(string)
// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
// invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
// invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'



// const invertirCaso = (cadena) => {
//     let nuevaCadena = '';
//     for (let i = 0; i < cadena.length; i++) {
//         if (cadena[i] == cadena[i].toUpperCase()) {
//             nuevaCadena = nuevaCadena + cadena[i].toLowerCase(); 
//         } else {
//             nuevaCadena = nuevaCadena + cadena[i].toUpperCase();
//         }
//     }
//     return nuevaCadena
// }

// console.log(invertirCaso('Ada Lovelace'));
// console.log(invertirCaso('feliz cumple'));
// console.log(invertirCaso('jAvAsCrIpT'));

// ----------------------------Ejercicio 5
// gano(tragamonedas)
// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

// gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
// gano(['💫', '💫', '💫', '💫', '💫']) // true
// gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true


// const gano = (simbolos) => {
//     for (let i = 0; i < 5; i++) {
//         if (simbolos[0] !== simbolos[i]) {
//             return false
//         } 
//     }
//     return true
// } 

// console.log(gano(['⭐️', '⭐️', '⭐️', '💫', '✨']));
// console.log(gano(['💫', '💫', '💫', '💫', '💫']));
// console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️']));


//----------------------Ejercicio 6
// estanJuntos(personajes)
// Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

// const estanJuntos = (personajes) => {
//     for (let i = 0; i < personajes.length; i++) {
//         if ((personajes[i] === 'Sam' && personajes[i+1] === 'Frodo') || (personajes[i] === 'Sam' && personajes[i-1] === 'Frodo')) {
//             return true
//         }
//     }
//     return false
// }

// console.log(estanJuntos(['Sam', 'Frodo', 'Legolas'])) //true
// console.log(estanJuntos(['Aragorn', 'Frodo', 'Frodo'])) //true
// console.log(estanJuntos(['Sam', 'Orco', 'Frodo'])) //true
// console.log(estanJuntos(['Frodo','Sam', 'Legolas']))



//-----------Ejercicio 7

// separar(perrosYGatos)
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'


// const perro = '🐶';
// const gato = '🐱';

// const separar = (animales) => {
//     let newArrayGatos = '';
//     let newArrayPerros = '';
//     for (const animal of animales) {
//         if (animal === perro) {
//             newArrayPerros = newArrayPerros + perro;
//         } else if (animal === gato) {
//             newArrayGatos = newArrayGatos + gato;
//         }
//     }
//     return newArrayPerros + newArrayGatos
// }

// console.log(separar('🐶🐱🐶🐱🐱🐶🐶'));

// ----------------Ejercicio 8

// obtenerChatStatus(usuarias)
// Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
// Ejemplo:

const obtenerChatStatus = (usuarias) => {
    const newString1 = `${usuarias[0]} está conectada`;
    const newString2 = `${usuarias[0]} y ${usuarias[1]} están conectadas`;
    const newString3 = `${usuarias[0]}, ${usuarias[1]} y ${usuarias.length} persona(s) están conectadas`; //no sé cómo contar desde la que quedan
    for (let i = 0; i < usuarias.length; i++) {
        switch (usuarias.length) {
            case 1:
                return newString1;                                
                break;
            case 2:
                return newString2;
                break;        
            default:
                return newString3;
                break;
        }
    }
    
}

console.log(obtenerChatStatus(['Ada'])) // 'Ada está conectada'
console.log(obtenerChatStatus(['Ada', 'Grace'])) // 'Ada y Grace están conectadas'
console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie'])) // 'Ada, Grace y 1 persona(s) más están conectadas'


