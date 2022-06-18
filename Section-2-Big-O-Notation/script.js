"use strict";

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// Solutions #1
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

//Solution #2
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo1(5));
console.log(addUpTo2(5));
