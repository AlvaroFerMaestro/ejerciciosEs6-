/* Dado el siguiente javascript usa forof y forin para hacer la media del 
volumen de todos los sonidos favoritos que tienen los usuarios.
 */
const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];


function calcularMediaVolumen(users) {
  // Inicializamos la variable para almacenar la suma de los volúmenes
  let totalVolume = 0;
  // Inicializamos la variable para contar el número de sonidos
  let soundCount = 0;

  // Usamos for...of para iterar sobre cada usuario
  for (const user of users) {
    // Usamos for...in para iterar sobre los sonidos favoritos de cada usuario
    for (const sound in user.favoritesSounds) {
      // Sumamos el volumen de cada sonido al total
      totalVolume += user.favoritesSounds[sound].volume;
      // Incrementamos el contador de sonidos
      soundCount++;
    }
  }

  // Calculamos la media dividiendo la suma total por el número de sonidos
  const averageVolume = totalVolume / soundCount;

  // Devolvemos el resultado
  return averageVolume;
}

// Llamamos a la función y mostramos el resultado
const mediaVolumen = calcularMediaVolumen(users);
console.log(`La media del volumen de todos los sonidos favoritos es: ${mediaVolumen}`);
