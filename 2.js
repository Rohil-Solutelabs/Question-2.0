// Validate Subsequence
// Given two non-empty arrays of integers, write a function that determines whether the
// second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren’t necessarily adjacent in the
// array but that are in the same order as they appear in the array. For instance, the
// numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4].
// Note that a single number in the array and the array itself are both valid subsequences of the array.
// Sample Input: array = [ 5, 1, 22, 25, 6, -1, 8, 10 ], sequence = [ 1, 6, -1, 10 ]
// Sample Output: true

function isValidSubsequence(array, sequence) {
  let arrIndex = 0;
  let seqIndex = 0;
  // enters in while loop which continues until the end of either array or sequence has been reached
  while (arrIndex < array.length && seqIndex < sequence.length) {
    // compares the current element in array with the current element in sequence
    if (array[arrIndex] === sequence[seqIndex]) {
      seqIndex++;
    }
    arrIndex++;
  }
  // console.log(seqIndex, arrIndex);
  return seqIndex === sequence.length;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
// const array = [5, 1, 22, -46, 25, 6, -1, 8, 10, -54, 34];
// const sequence = [1, 6, -1, 10, 45];
const sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));
