function debounce(fn, delay) {
  let timer;
  return (...rest) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(rest);
    }, delay);
  };
}
