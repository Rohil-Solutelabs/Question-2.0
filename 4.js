// Non-Constructible Change
// Given an array of positive integers representing the values of coins in your possession,
// write a function that returns the minimum amount of change (the minimum sum of money)
// that you cannot create. The given coins can have any positive integer value and aren't necessarily unique
// (i.e., you can have multiple coins of the same value).
// For example, if you are given coins = [ 1, 2, 5 ], the minimum amount of change that you can’t create is 4.
// If you are given no coins, the minimum amount of change that you can’t create is 1.

// max Chnage = 41


function minimumChange(coinArray) {
  coinArray.sort((a, b) => a - b);
  let currentChange = 0;
  let i = 0;
  while (i < coinArray.length && coinArray[i] <= currentChange + 1) {
    currentChange = currentChange + coinArray[i];
    i++;
  }
  return currentChange + 1;
}

const coinArray = [5, 7, 1, 1, 2, 3, 22];
// const coinArray = [];
console.log(minimumChange(coinArray));
