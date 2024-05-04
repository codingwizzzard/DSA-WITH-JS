// method 1
// const reverseStr = (s) => {
//     const splitStr = s.split(" ")
//     const stack = []

//     if (!s) {
//         return "Pls enter a valid string"
//     }
//     if(splitStr.length == 1) {
//         return s
//     }
//     splitStr.map((value) => {
//         stack.push(value)
//     })

//     let finalStr = ""
//     while (stack.length) {
//         const current = stack.pop()
//         if (current) {
//             finalStr += current + " "
//         }
//     }
//     return finalStr.trim()
// }
// console.log(reverseStr("the sky is blue"))
// console.log(reverseStr(" good morning "))
// console.log(reverseStr(""))


// method 2
function reverseStr(s) {
    const stack = []
    const splitStr = s.split(" ")
    for (var i = 0; i < splitStr.length; i++) {
        stack.push(splitStr[i])
    }
    let reversed = ""
    while(stack.length) {
        reversed += stack.pop() + " "
    }
    return reversed.trim()
}
console.log(reverseStr("the sky is blue"))
console.log(reverseStr(" good morning "))
console.log(reverseStr(""))