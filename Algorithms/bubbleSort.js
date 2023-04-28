//bubble sorting algo, the largest values bubble to the top

//This is built in javascript sort method that needs a comparative function to sort numbers correctly
// console.log(
//   [4, 7, 2, 9, 10].sort((a, b) => {
//     return a - b;
//   })
// );

//Optimized version for when arrays are nearly sorted.
const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      //this way prevents comparing out of range
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return arr;
};

// const bubbleSort = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     } //this way prevents comparing out of range
//   }
//   return arr;
// };

console.log(bubbleSort([1, 2, 4, 7, 100, 34]));
