const smallestSquareGreaterOrEqual = (arr, target) => {
    let start = 0
    let end = arr.length - 1
    let result = -1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        let squareRoot = Math.floor(Math.sqrt(arr[mid]))

        if (squareRoot * squareRoot < arr[mid]) squareRoot++

        if (squareRoot * squareRoot >= target) {
            result = squareRoot * squareRoot
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return result
}

let arr = [1, 4, 9, 16, 25, 36, 49, 64, 81]
let target = 20
console.log("Smallest square greater than or equal to", target, ":", smallestSquareGreaterOrEqual(arr, target))