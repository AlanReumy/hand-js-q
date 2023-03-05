/**
 * Array.isArray实现
 * @param {*} arr
 * @returns
 */
Array.myIsArray = function (arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
};
