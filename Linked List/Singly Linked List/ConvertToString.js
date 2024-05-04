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
    ConvertToString() {
        var current = this.head
        var str = ""
        while (current) {
            str += current.data + " ";
            current = current.next
        }
        return str
    }
}

const list = new List()
list.head = new Node(1)
list.head.next = new Node(2)
list.head.next.next = new Node(3)
list.head.next.next.next = new Node(4)
const resultString = list.ConvertToString();
console.log(resultString)
console.log(list)