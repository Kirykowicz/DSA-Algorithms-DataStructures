// Bubble Sort
// A sorting algorithm where the largest values bubble up to the top

// less optimized solutions
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // Swap the two
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    console.log('one pass complete' + ' ' + arr);
  }
  return arr;
}

// console.log(bubbleSort([99, 37, 45, 29, 8, 7 - 36, 88]));

// More optimized solution
function bubbleSortOptimized(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // Swap the two
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
    console.log('one pass complete' + ' ' + arr);
  }
  return arr;
}

console.log(bubbleSortOptimized([1, 2, 3, 4, 7, 6]));
