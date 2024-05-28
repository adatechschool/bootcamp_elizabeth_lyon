// Quand on se simplifie la vie :

function flip(array, mode) {
    if (mode === 'horizontal') {
        return array.map(row => row.reverse());
    } else if (mode === 'vertical') {
        return array.slice().reverse();
    }
}

let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(flip(array, 'horizontal'));
// resultat attendu: [[3, 2, 1], [6, 5, 4], [9, 8, 7]]

console.log(flip(array, 'vertical'));
// resultat attendu: [[7, 8, 9], [4, 5, 6], [1, 2, 3]]


// // -------------------------------------------------------------- //
// // Quand on a envie de détaillé plus :

// function flip(array, mode) {
//     let flippedArray = [];
//     let numRows = array.length;
//     let numCols = array[0].length;

//     if (mode === 'horizontal') {
//         for (let i = 0; i < numRows; i++) {
//             flippedArray[i] = [];
//             for (let j = 0; j < numCols; j++) {
//                 flippedArray[i][j] = array[i][numCols - 1 - j];
//             }
//         }
//     } else if (mode === 'vertical') {
//         for (let i = 0; i < numRows; i++) {
//             flippedArray[i] = array[numRows - 1 - i].slice(); //  On copie le tableau original pour ne pas le modifier directement
//         }
//     } else {
//         throw new Error("Invalid mode. Use 'horizontal' or 'vertical'.");
//     }

//     return flippedArray;
// }


// let array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(flip(array, 'horizontal'));
// // resultat attendu: [[3, 2, 1], [6, 5, 4], [9, 8, 7]]

// console.log(flip(array, 'vertical'));
// // resultat attendu: [[7, 8, 9], [4, 5, 6], [1, 2, 3]]
