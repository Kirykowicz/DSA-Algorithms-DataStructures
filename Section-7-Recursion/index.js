// What is recursion?
// It is a process (a function in our case) that calls itself
// Two essential parts of a recursive function!, the base case, and the different input

// first recursive example

function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// second recursive example

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// factorial iterative aproach

function factorialIterative(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.log(factorialIterative(4));

// factorial recursively

function factorialRecursive(num) {
  if (num === 1) return 1;
  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(4));

// Helper Method Recursion

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]));

// Pure recursion

function collectOddValuesPureRecursion(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValuesPureRecursion(arr.slice(1)));
  return newArr;
}

console.log(collectOddValuesPureRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9]));
