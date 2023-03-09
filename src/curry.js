// function curry
function myCurry(fn) {
  function curry(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, [...args]);
    } else {
      return function (...restArgs) {
        return curry.apply(this, [...args, ...restArgs]);
      };
    }
  }
  return curry;
}

// test
// const sum = (a, b, c, d) => a + b + c + d;
// const currySum = myCurry(sum);
// currySum(1, 2)(3)(4);
