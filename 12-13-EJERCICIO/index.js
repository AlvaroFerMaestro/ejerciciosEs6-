/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array: */
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return -1;
}
console.log(findArrayIndex(mainCharacters, "Han Solo"));
console.log(findArrayIndex(mainCharacters, "Chewbacca"));
console.log(findArrayIndex(mainCharacters, "Yoda"));

/* Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente. */

function removeItem (array, text) {
    const indexToRemove = findArrayIndex(array, text);
    if (indexToRemove !== -1) {
        array.splice(indexToRemove, 1);
    }
    return array;
}

console.log(removeItem(mainCharacters, "Han Solo"));
console.log(mainCharacters);

console.log(removeItem(mainCharacters, "Rey"));
console.log(mainCharacters);

console.log(removeItem(mainCharacters, "Yoda"));
console.log(mainCharacters);