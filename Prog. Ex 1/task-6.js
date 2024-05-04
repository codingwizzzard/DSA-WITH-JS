/*
## Task 6: Print the elements without the border
Input :-
11 12 13 14
15 16 17 18
19 20 21 22 
23 24 25 26 
Output :-
16 17 
20 21
*/
arr = [
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [19, 20, 21, 22],
    [23, 24, 25, 25]
]

for (var i = 1; i < arr.length - 1; i++) {
    output_str = ""
    for (var j = 1; j < arr[i].length - 1; j++) {
        output_str += arr[i][j] + " "
    }
    console.log(output_str)
}