/*## Task 2: Reverse Array in Sorted Order using Bubble Sort
arr = [3, 4, 5, 6, 1, 8]
arr = [8, 6, 5, 4, 3, 1]
*/
arr = [3, 4, 5, 6, 1, 8]
console.log("Array before sorting : " + arr)

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j + 1]) {
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}
console.log("Array after sorting (in reverse order): " + arr)