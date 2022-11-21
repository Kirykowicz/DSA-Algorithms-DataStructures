// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element(called the pivot) and finding the index where the pivot should end up in the sorted array.
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// In order to implement merge sort, it is useful to first implement a function responsible for arranging elements in an array on either side of a pivot
// Given and array, this helper function should designate an element as the pivot
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// The helper shoudl do this IN PLACE, that is, it shoudl not create a new array
// When complete, the helper should return the incex of the pivot

// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that is's roughly the median value in the data set you're sorting.
// For simplicity, we'll always choose the pivot to be the first element

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([11, 4, 3, 12, 7, 5, 6]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // Left
    quickSort(arr, left, pivotIndex - 1);
    // Right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
