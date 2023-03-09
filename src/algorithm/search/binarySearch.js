function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = (left + (right - left)) >> 1;
    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] === target) {
      return mid;
    }
  }
  return -1;
}
