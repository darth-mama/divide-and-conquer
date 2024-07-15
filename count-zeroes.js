function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  if (left < arr.length && arr[left] === 0) {
    return arr.length - left;
  }
  return 0;
}

// Export the function
module.exports = countZeroes;
