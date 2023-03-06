Array.prototype.myFlatMap = function (mapper) {
  return this.map(mapper).flat();
};
