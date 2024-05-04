class Stack {
    constructor() {
        this.stack = []
    }
    push(element) {
        this.stack.push(element)
    }
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        return this.stack.pop()
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack[this.size() - 1]
    }
    isEmpty() {
        return this.stack.length == 0
    }
    size() {
        return this.stack.length
    }
    reverse_stack() {
        let temp = new Stack()
        while (!this.isEmpty()) {
            temp.push(stack.pop())
        }
        return temp
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.peek())
console.log(stack.pop())

console.log(stack)
console.log(stack.isEmpty())
console.log(stack.reverse_stack())