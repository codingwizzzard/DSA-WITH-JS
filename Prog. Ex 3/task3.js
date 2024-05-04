function isPrime(num) {
    if (num <= 1) return false
    if (num <= 3) return true
    
    if (num % 2 === 0 || num % 3 === 0) return false
    
    let i = 5
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false
        i += 6
    }
    
    return true
}

function largestPrimeLessOrEqual(arr, target) {
    let start = 0, end = arr.length - 1, result = -1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] <= target && isPrime(arr[mid])) {
            result = arr[mid]
            start = mid + 1
        } else if (arr[mid] > target || !isPrime(arr[mid])) {
            end = mid - 1
        }
    }

    return result
}

let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
let target = 20
console.log("Largest prime less than or equal to", target, ":", largestPrimeLessOrEqual(arr, target)) 