function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if the mid element is the target
    if (arr[mid] === num) {
      return mid;
    }

    // Determine which side is properly sorted
    if (arr[left] <= arr[mid]) {
      // Left side is sorted
      if (num >= arr[left] && num < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right side is sorted
      if (num > arr[mid] && num <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  // If the target is not found
  return -1;
}

module.exports = findRotatedIndex;
