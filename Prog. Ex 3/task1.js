function findMissingEle(arr) {
    let temp = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] > 1) {
            for (let j = arr[i] + 1; j < arr[i + 1]; j++) {
                temp[temp.length] = j
            }
        }
    }
    return temp
}

let arr = [1, 2, 5, 6, 7, 8, 9, 10]
console.log("Missing elements:", findMissingEle(arr))