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
  for (let coin of coinArray) {
    if (coin > currentChange + 1) {
      return currentChange + 1; 
    }
    currentChange = currentChange + coin; 
  }
  return currentChange + 1; // if all sums can be created, return the next one
}

const coinArray = [5, 7, 1, 1, 2, 3, 22];
// const coinArray = [];
const minimumChangevalue = minimumChange(coinArray);
console.log(minimumChangevalue);
