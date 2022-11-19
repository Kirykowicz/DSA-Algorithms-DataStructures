// Linear Search
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    } else {
    }
  }
  return -1;
}

console.log(linearSearch(['hello', 'goodbye', 'world'], 'goodbye'));

// Binary Search
// Only works on sorted arrays/sorted data

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] == elem) {
    return middle; // returns the index of the elem
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1));

// Naive String Search

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'lol'));
