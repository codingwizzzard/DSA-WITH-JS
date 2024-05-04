/*
Binary Search : Binary Search is a searching technique that works on the Divide and Conquer approach. It is used to search for any element in a sorted array. Compared with linear, binary search is much faster with a Time Complexity of O(logN), whereas linear search works in O(N) time complexity

How it works:
1) Check the value in the center of the array.
2) If the target value is lower, search the left half of the array. If the target value is higher, search the right half.
3) Continue step 1 and 2 for the new reduced part of the array until the target value is found or until the search area is empty.
4) If the value is found, return the target value index. If the target value is not found, return -1. */
var array = [10, 20, 30, 40, 50, 60]
var target = 10
let si = 0
let ei = array.length - 1

while (si <= ei) {
    let midVal = Math.floor((si + ei) / 2)
    if(array[midVal] == target) {
        console.log("Element found at index:", midVal)
        break
    }else if(array[midVal] < target) {
        si = midVal + 1
    } else{
        ei = midVal - 1
    }
}

if (si > ei) {
    console.log("Element not found");
}