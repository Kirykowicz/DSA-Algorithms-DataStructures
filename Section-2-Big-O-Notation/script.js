"use strict";

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// if not time, then what? How should we measure performance? Rather than counting seconds which are so variable,the better way is to count the number of simple operations the computer has to perform.

// Solutions #1
// O(n) linear time
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

//Solution #2
// O(1) constant time
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

// O(n)
function countUpAndDown(n) {
  console.log("going up");
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  console.log("At the top! \nGoing down...");
  for (let j = n - 1; j >= 1; j--) {
    console.log(j);
  }
  console.log("Back at the bottom, see you later!");
}

// O(n^2)
function printAllPairs(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
}

// Big O notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.

// O(2n) is simplified as O(n)
// O(500) is simplified as O(1) "constant runtime"
// O(13n^2) is simplified as O(n^2)
// O(n + 10) is simplified as O(n)
// O(1000n + 50) is simplified as O(n)
// O(n^2 + 5n + 8) is simplified as O(n^2)

// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array (by index) or object (by key) is constant
// 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

// O(n)
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// O(1)
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// ----------- SPACE COMPLEXITY ---------------

// Sometimes you'll hear the term AUXILIARY SPACE COMPLEXITY to refer to space required by the algorithm, not including space taken up by the inputs.

// Most primitives (booleans, numbers, undefined, null) are constant space
// Strings require O(n) space (where n is the string length)
// Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

// space complexity O(1)
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// space complexity O(n)
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
}

const arr1 = [1, 2, 3, 6];

// Recap
// 1. To analyze the performance of an algorithm, we use Big O Notation
// 2. Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
// 3. Big O notation does not care about precision, only about general trends (linear? quadratic? constant?)
// 4. The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
// 5. Big O Notation is everywhere, so get lots of practice!
