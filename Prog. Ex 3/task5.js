function maxPowerOfTwo(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--)
        if (arr[i] <= target && isPowerOfTwo(arr[i])) return arr[i]
    return -1
}

function isPowerOfTwo(num) {
    return num !== 0 && (num & (num - 1)) === 0
}

let arr = [1, 2, 4, 8, 16, 32, 64, 128]
let target = 20
console.log("Largest power of two less than or equal to", target, ":", maxPowerOfTwo(arr, target))