// Linear search : searches through an array and returns the index of the value it searches for.
// How it works:
// 1) Go through the array value by value from the start.
// 2) Compare each value to check if it is equal to the value we are looking for.
// 3) If the value is found, return the index of that value.
// 4) If the end of the array is reached and the value is not found, return -1 to indicate that the value was not found.
var array = [10, 20, 30, 40, 50, 60]
var target = 50
var index = -1
for (var i = 0; i < array.length; i++) {
    if (array[i] == target) {
        index = i
        break
    }
}
if (index != -1) {
    console.log("Element found " + "at index " + index)
} else {
    console.log("Element not found")
}