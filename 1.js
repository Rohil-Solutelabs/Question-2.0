// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function should return them in the array, in any order.
// If no two numbers sum up to the target sum, the function should return an empty array.
// Note that the target sum has to be obtained by summing two different integers in the array; you can’t add a single integer to itself to obtain the target sum.
// You can assume that there will be at most one pair of numbers summing up to the target sum.


function findTwoSumnew(arr, target) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

const arr = [3, 5, -4, 8, 24, 11, 1, -1, 6, -5, 10, 12, -34, 15];
console.log(findTwoSumnew(arr, -23));


// ------------------------------Or We can do with this method also------------------------------------------------------------------


function findTwoSum(array, targetSum) {
  const numSet = new Set();

  for (const num of array) {
    const match = targetSum - num;
    if (numSet.has(match)) {
      return [match, num];
    } else {
      numSet.add(num);
    }
  }
  return [];
}

const array = [3, 5, -4, 8, 24, 11, 1, -1, 6, -5, 10, 12, -34, 15];
console.log(findTwoSum(array, -23));
