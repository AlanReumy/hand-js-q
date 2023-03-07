// 使用setTimeout实现setInterval
function mySetInterval(fn, delay) {
  let timer = null;
  function interval() {
    timer = setTimeout(() => {
      fn();
      interval();
    }, delay);
  }
  interval();
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}
