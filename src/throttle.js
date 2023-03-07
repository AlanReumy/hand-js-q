function throttle(fn, delay) {
  let timer = 0;
  return (...rest) => {
    let now = Date.now();
    if (now - timer > delay) {
      fn(rest);
      timer = now;
    }
  };
}

/**
 * 节流：使用定时器
 * @param {Function} fn
 * @param {Number} delay
 */
function throttle(fn, delay) {
  let timer;
  return (...rest) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn(rest);
      }, delay);
    }
  };
}
