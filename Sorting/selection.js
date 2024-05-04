/*
Selection sort : The Selection Sort algorithm goes through all elements in an array, finds the lowest value, and moves it to the front of the array, and does this over and over until the array is sorted.

Selection Sort goes through an array of n values n − 1 times. This is because when the algorithm has sorted all values except the last, the last value must also be in its correct place.

How it works:
1) Go through the array to find the lowest value.
2) Move the lowest value to the front of the unsorted part of the array.
3) Go through the array again as many times as there are values in the array.
*/

arr = [5, 10, 2, 3, 20]
console.log("Array before sorting : " + arr)
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log("Array after sorting : " + arr)