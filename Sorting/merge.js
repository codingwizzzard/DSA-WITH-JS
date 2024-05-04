/*
Merge Sort : recursive algorithm that continuously splits the array in half until it cannot be further divided i.e., the array has only one element left (an array with one element is always sorted). Then the sorted subarrays are merged into one sorted array.

How it works:
1) Divide the unsorted array into two sub-arrays, half the size of the original.
2) Continue to divide the sub-arrays as long as the current piece of the array has more than one element.
3) Merge two sub-arrays together by always putting the lowest value first.
4) Keep merging until there are no sub-arrays left.
*/
arr = [5, 10, 2, 3, 20, 100]
console.log("Array before sorting : ", arr)
function Merge(arr, strtindex, midVal, endindex) {
    var leftidx = strtindex
    var righttidx = midVal + 1
    var x = strtindex
    var temp = []

    while (leftidx <= midVal && righttidx <= endindex) {
        if (arr[leftidx] < arr[righttidx]) {
            temp[x++] = arr[leftidx++]
        } else {
            temp[x++] = arr[righttidx++]
        }
    }
    while (leftidx <= midVal) {
        temp[x++] = arr[leftidx++]
    }
    while (righttidx <= endindex) {
        temp[x++] = arr[righttidx++]
    }
    for (var i = strtindex; i <= endindex; i++) {
        arr[i] = temp[i]
    }
}

function MergeSort(arr, strtindex, endindex) {
    if (strtindex < endindex) {
        var midVal = Math.floor((strtindex + endindex) / 2)
        MergeSort(arr, strtindex, midVal)
        MergeSort(arr, midVal + 1, endindex)
        Merge(arr, strtindex, midVal, endindex)
    }
}
MergeSort(arr, 0, arr.length - 1)
console.log("Array after sorting : ", arr)