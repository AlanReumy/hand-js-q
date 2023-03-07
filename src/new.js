// 实现一个new操作符
function myNew(fn, ...rest) {
  const obj = Object.create(fn.prototype);
  const res = fn.call(obj, ...rest);
  if (res && (typeof res === "object" || typeof res === "function")) {
    return res;
  }
  return obj;
}
