"use strict";

// SOME COMMON PATTERNS
// 1. Frequency Counter
// 2. Multiple Pointers
// 3. Sliding Window
// 4. Divide and Conquer
// 5. Dynamic Programming
// 6. Greedy Algorithms
// 7. Backtracking
// 8. Many more!

// FREQUENCY COUNTERS - This pattern uses objects or sets to collect values/frequencies of values - This can often avoid the need for nested loops or O(N^2) operations with arrays / strings.

// (EXAMPLE) - write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. same([1,2,3], [4,1,9]) = true, same([1,2,3], [1,9]) = false, same([1,2,1], [4,4,1]) = false (must be the same frequency)

// Naive Solution - Time Complexity O(N^2)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Refactored version - Time Complexity O(N) ------------------

function sameRefactored(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    console.log(frequencyCounter1);
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    console.log(frequencyCounter2);
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  //   console.log(frequencyCounter1);
  //   console.log(frequencyCounter2);
  return true;
}

// ANAGRAMS - Given two strings, write a function to determine if the second string is an anagram of the first string. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema and iceman.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let letter of str1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

// Alternate solution to the anagram problem

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    console.log(lookup);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// MULTIPLE POINTERS - Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. - Very efficient for solving problems with minimal space complexity as well.

// (An Example) - Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Naive Solution - Time Complexity - O(N^2) - Space Complexity - O(1)

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

//console.log(sumZero([5, 3, 2, 1, 0, -1, -2, -3, -4, -7]));

// REFACTORED VERSION - Time complexity O(N) - Space complexity O(1)

function sumZeroRefactored(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    if (sum < 0) right--;
    if (sum > 0) left++;
  }
}

//console.log(sumZeroRefactored([5, 3, 2, 1, 0, -1, -2, -3, -4, -7]));

// CountUnigue Values - Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  if (arr.length === 0) return `empty array, so zero matches`;
  if (arr.length === 1)
    return "How can you try and match something if there is only one item in the array?";
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//console.log(countUniqueValues([13, 13, 15, 17, 17, 18, 19]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([1]));

// SLIDING WINDOW - This pattern involves creating a window which can either be an array or number from one position to another - Depending on a certain condition, the window either increases or closes (and a new window is created) - Very useful for keeping track of a subset of data in an array / string etc.

// Example - Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// Naive solultion

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//console.log(maxSubarraySum([1, 2, 2, 3, 4], 2));

// Refactored version O(N)

function maxSubarraySumRefactored(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
