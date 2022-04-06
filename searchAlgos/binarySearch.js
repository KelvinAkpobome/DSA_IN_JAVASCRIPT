
// searching an unsorted array of numbers
function binarySearch(array, n) {
  let array1 = [...new Set(array)]
  array1.sort((a, b) => a - b)
  let lowIndex = 0, highIndex = array1.length - 1;
  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array1[midIndex] == n) {
      return midIndex;
    } else if (n > array1[midIndex]) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([8, 2, 3, 8, 4, 2], 4))

