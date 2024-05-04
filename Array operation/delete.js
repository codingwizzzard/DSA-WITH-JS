//deleting an element from an array
var arr = [10, 20, 30, 40, 50, 60]
console.log("Array before deletion an element : " + arr)
var position = 3
if (position > arr.length) {
    console.log("Index not found")
} else {
    for (var i = position; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length--
    console.log("Array after deletion an element : " + arr)
}