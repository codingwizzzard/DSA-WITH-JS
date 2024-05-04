// method 1
function isValid(s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (char == "[" || char == "(" || char == "{") {
            stack.push(char)
        } else if (char == "]" || char == ")" || char == "}") {
            if (isEmpty(stack)) {
                return false
            }
            let top = stack.pop()
            if ((char == ")" && top != "(") || (char == "}" && top != "{") || (char == "]" && top != "[")) {
                return false
            }
        }
    }
    return isEmpty(stack)
}

function isEmpty(stack) {
    return stack.length == 0
}

console.log(isValid("{()[]}"))
console.log(isValid("{(} {)}"))


// method 2
function isValid(s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let x = s[i]
        if (x == '(' || x == '[' || x == '{') {
            stack.push()
            continue
        }
        if (stack.length == 0) {
            return false
        }
        let check
        switch (x) {
            case ')':
                check = stack.pop()
                if (check == '{' || check == '[')
                    return false
                break
            case ']':
                check = stack.pop()
                if (check == '{' || check == '(')
                    return false
                break
            case '}':
                check = stack.pop()
                if (check == '(' || check == '[')
                    return false
                break
        }
    }
    return (stack.length == 0)
}

let s = "[(])"
if (isValid(s))
    console.log("Balanced")
else
    console.log("Not Balanced")