/**
 *  1. NaN在===中是不相等的，而在Object.is中是相等的
 *  2. +0和-0在===中是相等的，而在Object.is中是不相等的
 */
Object.is = function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }
  return x !== x && y !== y;
};

console.log(Object.is(NaN, NaN));
