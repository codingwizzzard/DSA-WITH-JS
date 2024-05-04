/*
## Task 1: Remove Duplicates from an Array
I/p arr = [3, 4, 5, 2, 3, 4, 5, 6]
o/p  [3, 4, 5, 2, 6]
*/
var arr = [3, 4, 5, 2, 3, 4, 5, 6];
console.log("Array before removing duplicates : " + arr);

var k = 0;
temp = [];
temp[0] = arr[0];

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (arr[i] == temp[j]) {
            break;
        }
        if (i == j) {
            k++;
            temp[k] = arr[i];
            break;
        }
    }
}
arr = [];
for (i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
}
console.log("Array after removing duplicates : " + arr);