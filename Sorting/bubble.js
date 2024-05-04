/*
Bubble sort : an algorithm that sorts an array by comparing two adjacent elements and swapping them if they are not in the intended order. Here order can be anything like increasing or decreasing.

The Bubble Sort algorithm goes through an array of n values n − 1 times in a worst case scenario.

How it works:
1) Go through the array, one value at a time.
2) For each value, compare the value with the next value.
3) If the value is higher than the next one, swap the values so that the highest value comes last.
4) Go through the array as many times as there are values in the array.
*/
arr = [5, 10, 2, 6, 12]
console.log("Array before sorting : " + arr)
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}
console.log("Array after sorting : " + arr)