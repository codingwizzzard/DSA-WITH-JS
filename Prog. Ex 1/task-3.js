/* 
## Task 3: Transpose the Matrix
Input :-
0 0 0 0
1 1 1 1 
2 2 2 2
3 3 3 3
4 4 4 4
Output :-
0 1 2 3 4 
0 1 2 3 4
0 1 2 3 4 
0 1 2 3 4
*/
arr = [
    [0, 0, 0, 0], 
    [1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3], 
    [4, 4, 4, 4]
]
console.log("Original Array : ")
console.log(arr)
temp = [[], [], [], []];

for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length; j++) {
        temp[i][j] = arr[j][i]
    }
}
console.log("Transpose array : ")
console.log(temp)