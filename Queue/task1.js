// Stack Using Two Queues
class Stack {
    constructor() {
        this.q1 = []
        this.q2 = []
    }
    push(val) {
        this.q2.push(val)
        while(this.size() != 0) {
            this.q2.push(this.q1[0])
            this.q1.shift()
        }
        this.q = this.q1
        this.q1 = this.q2
        this.q2 = this.q
    }
    pop() {
        if(this.size() == 0) {
            return
        }
        return this.q1.shift()
    }
    top() {
        if (this.size() == 0)
            return -1;
        return this.q1[0]
    }
    size() {
        return this.q1.length
    }
    isEmpty() {
        return this.q1.length == 0
    }
    print() {
        let str = ""
        for(let i = 0;i<this.size();i++) {
            str += this.q1[i] + ", "
        }
        return str
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log("Size:", stack.size())
console.log("Top:", stack.top())
console.log("isEmpty:", stack.isEmpty())
console.log("stack:" + stack.print())
console.log(stack.pop())
console.log("stack:" + stack.print())