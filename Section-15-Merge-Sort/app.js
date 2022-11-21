// In order to implement merge sort, it is useful to first implement a function responsible for merging two sorted arrays.
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

// Merge portion of the mergeSort function
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// The actual function

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  console.log(`left: ${left}`);
  let right = mergeSort(arr.slice(mid));
  console.log(`right ${right}`);
  return merge(left, right);
}

console.log(mergeSort([2, 1, 3, 4, 3, 7, 98]));
