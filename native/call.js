/**
 * 手写call函数
 * @param {Object} obj
 * @param  {...any} rest
 * @returns
 */
Function.prototype.myCall = function (obj, ...rest) {
  const fn = this;
  obj = obj === void 0 || obj === null ? window : Object(obj);
  obj.fn = fn;
  const res = obj.fn(...rest);
  delete obj.fn;
  return res;
};
