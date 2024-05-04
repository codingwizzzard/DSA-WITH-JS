//inserting an element in an array
var arr = [10, 20, 30, 40, 50, 60]
console.log("Array before inserting an element : " + arr)
var position = 2
var ele = 100
if (position > arr.length) {
    console.log("Index not found")
} else {
    for (var i = arr.length; i > position; i--) {
        arr[i] = arr[i - 1]
    }
    arr[position] = ele
    console.log("Array after inserting an element : " + arr)
}