/*
Queue works on the FIFO(First in First Out) principle. Hence, it performs two basic operations which are the addition of elements at the end of the queue and the removal of elements from the front of the queue. Like Stack, Queue is also a linear data structure. 
*/

class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(val) {
        return this.queue.push(val)
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"
        }
        return this.queue.shift()
    }
    peek() {
        if (this.isEmpty()) {
            return "No elements in Queue"
        }
        return this.queue[0]
    }
    isEmpty() {
        return this.size == 0
    }
    size() {
        return this.queue.length
    }
    printQueue() {
        let str = ""
        for (var i = 0; i < this.size(); i++)
            str += this.queue[i] + ", "
        return str
    }
}

let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)

console.log("Queue: " + queue.printQueue())
console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue.peek())
console.log("Queue: " + queue.printQueue())