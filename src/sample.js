// 实现从数组中随机取一个元素
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};
