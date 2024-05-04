/*
## Task 5: Z Traversal
Input :-
1 2 3 
4 5 6
7 8 9
Output :-
1 2 3
  5
7 8 9
*/
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (var i = 0; i < arr.length; i++) {
    output_str = ""
    for (j = 0; j < arr[i].length; j++) {
        if (i == 0 || i == arr.length - 1 || j == (arr.length - 1) - i) {
            output_str += arr[i][j] + " "
        } else {
            output_str += "  "
        }
    }
    console.log(output_str)
}