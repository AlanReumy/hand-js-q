/**
 * 实现instanceof
 * @param {*} instance
 * @param {*} parent
 */
function myInstanceOf(instance, parent) {
  if (typeof instance !== "object" && typeof instance !== "function") {
    return false;
  }
  let proto = instance.__proto__ || null;
  while (true) {
    if (proto === null) {
      return false;
    }
    if (proto === parent.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
}
