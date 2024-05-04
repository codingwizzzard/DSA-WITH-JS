function smallestFibonacci(arr, target) {
    let prev = 0
    let current = 1

    while (current < target) {
        let temp = current
        current = prev + current
        prev = temp
    }

    for (let num of arr) {
        if (num >= target && isFibonacci(num)) return num
    }
    return -1
}

function isFibonacci(num) {
    let a = 0
    let b = 1
    while (b < num) {
        let temp = b
        b = a + b
        a = temp
    }
    return b == num
}

let arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
let target = 20
console.log("Smallest Fibonacci number greater than or equal to", target, ":", smallestFibonacci(arr, target)) 