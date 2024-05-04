class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    isPalindrome() {
        var current = this.head
        var arr = []
        while (current != null) {
            arr.push(current.data)
            current = current.next
        }
        console.log(arr,current)  
        var start = 0
        var end = arr.length - 1

        while (start < end) {
            if (arr[start] != arr[end]) {
                return false
            }
            start++
            end--
        }
        return true
    }
}

const list = new List()
list.head = new Node(1)
list.head.next = new Node(40)
list.head.next.next = new Node(40)
list.head.next.next.next = new Node(40)
list.head.next.next.next.next = new Node(1)
console.log(list.isPalindrome())