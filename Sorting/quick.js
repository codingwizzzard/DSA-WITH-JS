/*
Quick Sort : algorithm that works on the idea of divide and conquer. It takes an element as a pivot and partitions the given array around that pivot by placing it in the correct position in the sorted array.

How it works:
1) Choose a value in the array to be the pivot element.
2) Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.
3) Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values.
4) Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element.
*/

arr = [5, 10, 2, 3, 20, 100]
console.log("Array before sorting : ", arr)

function QuickSort(arr, startidx, endidx) {
    if (startidx < endidx) { 
        var pivot = arr[endidx]
        var i = startidx - 1 
        for (var j = startidx; j < endidx; j++) {
            if (arr[j] < pivot) {
                i++
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        var temp = arr[i + 1]
        arr[i + 1] = arr[endidx]
        arr[endidx] = temp

        var pivotidx = i + 1

        QuickSort(arr, startidx, pivotidx - 1)
        QuickSort(arr, pivotidx + 1, endidx)
    }
}

QuickSort(arr, 0, arr.length - 1)
console.log("Array after sorting : ", arr)