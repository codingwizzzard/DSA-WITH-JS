/*
Ques: Next greater element
*/
function nextGreater(arr) {
    const stack = []
    const result = []

    for (let i = 0; i < arr.length; i++) {
        result[i] = -1

        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            const index = stack.pop()
            result[index] = arr[i]
        }
        stack.push(i)
    }
    return result
}

console.log(nextGreater([11, 13, 21, 3]))