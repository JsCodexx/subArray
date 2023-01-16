//max sub array
//Muhammad Nauman Yousaf
let givenData = [-2, 2, -3, 4, -1, 2, -8, 3];
let totalElements = givenData.length;
document.write(
  "Sum of Array is  : " + maxSumSubArray(givenData, totalElements) 
);
function maxSumSubArray(data, len) {
  let maxSum = 0;
  let currentSum = 0;
  for (i = 0; i < len; i++) {
    //we add array element in current sum
    currentSum = currentSum + data[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    } else if (currentSum < 0) {
      //if the current sum at any point is less than 0 it will initilize it to the zero
      currentSum = 0;
    }
  }
  console.log(maxSum)
  return maxSum;
}
