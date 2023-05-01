//Singly Linked List
//A datastructure that stores data, ordered list of data
//Unlike array, linked list have no indexes
//A data structure tjat contains a head, tail and length property.
//Linked lists consot of nodes and each node has a value and a pointer to another node or null
//Compare with arrays:
//Linked List connected via nodes with a next pointer, random access is not allowed
//Arrays, indexed in order, insertion and deletion can be expensive, can access quickly at specific index

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let newList = new SinglyLinkedList();
newList.push("Hello");
newList.push("Isaac");
newList.push("Dong");
console.log(newList);
console.log(newList.head);
console.log(newList.head.next);
