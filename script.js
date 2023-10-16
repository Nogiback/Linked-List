class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  addTail(data) {
    let current;
    if (this.head === null) {
      this.addHead(data);
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  getNode(index) {
    let current = this.head;
    let currentIndex = 0;
    while (current !== null) {
      if (currentIndex === index) {
        return current.data;
      }
      current = current.next;
      currentIndex++;
    }
    return null;
  }

  popTail() {
    let current = this.head;
    let previous;

    if (this.head === null) {
      return;
    } else {
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
    this.size--;
  }

  contains(data) {
    let current = this.head;

    if (current === null) {
      return null;
    } else {
      while (current !== null) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  findNode(data) {
    let current = this.head;
    let index = 0;

    if (current === null) {
      return null;
    }

    while (current !== null) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let nodeString = "";

    if (current === null) {
      return null;
    }

    while (current !== null) {
      nodeString += `${current.data} -> `;
      current = current.next;
      if (current === null) {
        nodeString += null;
      }
    }

    return nodeString;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index value.");
      return;
    } else if (index === 0) {
      this.addHead(data);
      return;
    }

    let newNode = new Node(data);
    let current = this.head;
    let currentIndex = 0;
    let prevNode;

    while (currentIndex < index) {
      prevNode = current;
      current = current.next;
      currentIndex++;
    }
    prevNode.next = newNode;
    newNode.next = current;
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index value.");
      return;
    } else if (index === this.size) {
      this.popTail();
      return;
    }

    let current = this.head;
    let currentIndex = 0;
    let prevNode;

    if (index === 0) {
      this.head = current.next;
      this.size--;
      return;
    }

    while (currentIndex < index) {
      prevNode = current;
      current = current.next;
      currentIndex++;
    }
    prevNode.next = current.next;
    current = null;
    this.size--;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.addHead(300); // List: [300]
myLinkedList.addHead(200); // List: [200 -> 300]
myLinkedList.addHead(100); // List: [100 -> 200 -> 300]
myLinkedList.addTail(400); // List: [100 -> 200 -> 300 -> 400]
myLinkedList.addTail(500); // List: [100 -> 200 -> 300 -> 400 -> 500]
myLinkedList.addTail(999); // List: [100 -> 200 -> 300 -> 400 -> 500 -> 999]
myLinkedList.popTail(); // Removes Tail Node { data: 999, next: null }
myLinkedList.insertAt(250, 2); // Adds new node at index 2
myLinkedList.removeAt(3); // Removes node at index 3
console.log(myLinkedList.toString());

console.log(myLinkedList.getHead()); // Prints Head Node { data: 100, next: Node... }
console.log(myLinkedList.getTail()); // Prints Tail Node { data: 500, next: null }
console.log(myLinkedList.getNode(2)); // Prints [250]
console.log(myLinkedList.getSize()); // Prints List Size: 5
console.log(myLinkedList.contains(400)); // Prints True
console.log(myLinkedList.contains(600)); // Prints False
console.log(myLinkedList.findNode(500)); // Prints Index: 4
console.log(myLinkedList.toString()); // Prints entire list: 100 -> 200 -> 250 -> 400 -> 500 -> null
