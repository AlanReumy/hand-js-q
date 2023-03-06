Array.prototype.myReduce = function (fn, ...init) {
  let next = init.length ? init[0] : this[0];
  for (let i = init.length ? 0 : 1; i < this.length; i++) {
    next = fn(next, this[i], i);
  }
  return next;
};
