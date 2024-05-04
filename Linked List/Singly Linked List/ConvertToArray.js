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
    ConvertToArray() {
        var current = this.head
        var arr = []
        var index = 0
        while (current) {
            arr[index] = current.data
            current = current.next
            index++
        }
        return arr
    }
}

const list = new List()
list.head = new Node(1)
list.head.next = new Node(2)
list.head.next.next = new Node(3)
list.head.next.next.next = new Node(4)
const resultArray = list.ConvertToArray();
console.log(resultArray)
console.log(list)