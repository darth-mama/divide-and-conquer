function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  // Perform binary search to find the index of the minimum element
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // Compare mid element with the rightmost element
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

module.exports = findRotationCount;
