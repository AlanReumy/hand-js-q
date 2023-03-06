/**
 * 手写bind函数
 * @param {*} obj
 * @param  {...any} arr
 * @returns
 */
Function.prototype.myBind = function (obj, ...arr) {
  const fn = this;
  obj = typeof obj === void 0 || typeof obj === null ? window : Object(obj);
  return function (...restArr) {
    obj.fn = fn;
    const res = obj.fn(...arr, ...restArr);
    delete obj.fn;
    return res;
  };
};
