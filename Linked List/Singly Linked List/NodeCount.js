class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null
    }
    NodeCount() {
        let current = this.head
        let counter = 0
        while (current) {
            counter++
            current = current.next
        }
        return counter
    }
}

const list = new List()
list.head = new Node(1)
list.head.next = new Node(2)
list.head.next.next = new Node(3)
list.head.next.next.next = new Node(4)
console.log(list.NodeCount())
console.log(list)