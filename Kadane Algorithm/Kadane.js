/*
Kadane Algorithm : Kadane's algorithm is a dynamic programming approach used to solve the maximum subarray problem, which involves finding the contiguous subarray with the maximum sum in an array of numbers. The algorithm was proposed by Jay Kadane in 1984 and has a time complexity of O(n).
*/

// First Method : Time Compplexity => O(n^3)
var arr = [10, 3, 2, -3, -5, -2]
var max = 0
for (i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
        var sum = 0
        for (k = i; k <= j; k++) {
            sum = sum + arr[k]
        }
        if(sum > max) {
            max = sum
        }
    }
}
console.log(max)

// Second Method : Time Complexity => O(n^2) 
var arr = [10, 3, 2, -3, -5, -2]
var max = 0
for (i = 0; i < arr.length; i++) {
    var sum = 0
    for (j = i; j < arr.length; j++) {
        sum = sum + arr[j]
        if (sum > max) {
            max = sum
        }
    }
}
console.log(max)

// Third Method : Time Complexity => O(n)
var arr = [10, 3, 2, -3, -5, -2]
var max = 0
var sum = 0
for (i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (max < sum) {
        max = sum
    }
    if (sum < 0) {
        sum = 0
    }
}
console.log(max)