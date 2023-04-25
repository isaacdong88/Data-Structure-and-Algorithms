//faster search compared to linear search, but data needs to be sorted

const binarySearch = (arr, value) => {
  let startPointer = 0;
  let endPointer = arr.length - 1;
  let middlePointer = Math.floor((startPointer + endPointer) / 2);
  while (arr[middlePointer] !== value && startPointer < endPointer) {
    if (arr[middlePointer] < value) {
      startPointer = middlePointer + 1;
    } else {
      endPointer = middlePointer - 1;
    }
    middlePointer = Math.floor((startPointer + endPointer) / 2);
  }
  if (arr[middlePointer] === value) {
    return middlePointer;
  } else {
    return -1;
  }
};

console.log(binarySearch([1, 5, 8, 10, 78, 99], 99));
console.log(binarySearch([1, 5, 8, 10, 78, 99], 1));
console.log(binarySearch([1, 5, 8, 10, 78, 99], 39));
