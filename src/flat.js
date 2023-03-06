Array.prototype.myFlat = function (depth = 1) {
  if (depth === 0) return this;
  return this.reduce(
    (a, b) => a.concat(Array.isArray(b) ? b.myFlat(depth - 1) : b),
    []
  );
};
