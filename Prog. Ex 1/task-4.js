/*
## Task 4: Rotate By 90
Input :-
1 2 3 4 
5 6 7 8
1 2 3 4
5 6 7 8
OutPut :-
4 8 4 8
3 7 3 7
2 6 2 6 
1 5 1 5
*/
arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]
]
console.log("Original array : ")
console.log(arr)

var temp = [[], [], [], []]

for (i = arr.length - 1; i >= 0; i--) {
    for (j = 0; j < arr.length; j++) {
        temp[(arr.length -1) - i][j] = arr[j][i]
    }
}
console.log("Array after rotating 90 degrees : ")
console.log(temp)