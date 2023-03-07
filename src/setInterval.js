// 使用setTimeout实现setInterval
function mySetInterval(fn, delay) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, delay);
  }
  interval();
  return {
    cancel: () => {
      clearTimeout(timer);
    },
  };
}
