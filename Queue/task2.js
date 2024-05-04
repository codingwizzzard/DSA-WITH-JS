/* 
Queues Using Two Stacks
*/
class Queue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }
    enqueue(element) {
        this.s1.push(element)
    }
    dequeue() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2.pop()
    }
    peek() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2[this.s2.length - 1]
    }
    isEmpty() {
        return this.s1.length === 0 && this.s2.length === 0;
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue)

console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.isEmpty())

console.log(queue)