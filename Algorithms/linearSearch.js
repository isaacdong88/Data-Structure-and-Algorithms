//Linear search function takes in an array and an value return index if value is in array
//returns -1 if not
const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return `${value} is found at index of ${i}`;
    }
  }
  return -1;
};

console.log(linearSearch([0, 1, 1, 2, 3], 4));

//This is indexOf, findIndex, includes behind the scene is doing

//Big O
//O(n) as input increase so does the time also increase
//Best case O(1) worst case O(n)
