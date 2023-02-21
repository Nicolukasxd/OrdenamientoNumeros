
const fs = require('fs'); // importar el módulo fs para leer archivos

const fileContents = fs.readFileSync('numeros.txt', 'utf-8'); // leer el archivo y guardar el contenido en una variable

const numbers = fileContents.trim().split('\n').map(num => Number(num));
/*
Coge el archivo y con .trim elimina todos los espacios en blanco
luego con .split('\n') Divide la cadena de texto en un array de subcadenas utilizando el \n
y el .map  itera cada elemento y le aplica la funcion Number que coje cada string y lo convierte en un numero
*/ 


// Función para ordenar el array utilizando el algoritmo de ordenamiento rápido
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }


  const pivot = array[0];
  const left = [];
  const right = [];


  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const sortedNumbers = quickSort(numbers);

/*
la línea de código está tomando los números del archivo de entrada,
ordenándolos utilizando el algoritmo de quicksort y luego almacenando
los números ordenados en la variable sortedNumbers.
*/

/* console.log(sortedNumbers);  */

const sortedFileContents = sortedNumbers.join('\n');
fs.writeFileSync('numeros_ordenados1.txt', sortedFileContents);  



