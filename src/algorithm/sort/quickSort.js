function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const cur = arr[arr.length - 1];
  const leftArr = arr.filter((v, i) => v <= cur && i !== arr.length - 1);
  const rightArr = arr.filter((v, i) => v > cur);
  return [...quickSort(leftArr), cur, ...quickSort(rightArr)];
}
