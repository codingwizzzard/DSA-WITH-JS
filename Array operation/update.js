//updating an element 
var arr = [10, 20, 30, 40, 50, 60];
console.log("Array before updating an element: " + arr);
var position = 2;
var newVal = 0;

if (position >= arr.length || position < 0) { 
    console.log("Index not found") 
} else {
    arr[position] = newVal;
    console.log("Array after updating an element: " + arr);
}