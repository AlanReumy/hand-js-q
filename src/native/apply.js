/**
 * 手写apply函数
 * @param {*} obj
 * @param {*} restArr
 * @returns
 */
Function.prototype.myApply = function (obj, restArr) {
  const fn = this;
  obj = obj === undefined || obj === null ? window : Object(obj);
  if (Array.isArray(restArr)) {
    throw new Error("must be array");
  }
  obj.fn = fn;
  const res = obj.fn(restArr);
  delete obj.fn;
  return res;
};
