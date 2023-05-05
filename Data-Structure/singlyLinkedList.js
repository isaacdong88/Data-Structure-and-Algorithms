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
    //add to end of list
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
  pop() {
    //removes from end of list
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    //removes from beginning of list
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    //adding to the beginning of list
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(pos) {
    let count = 0;
    let currentIndex = this.head;
    if (pos < 0 || pos >= this.length) return null;
    while (count !== pos) {
      currentIndex = currentIndex.next;
      count++;
    }
    return currentIndex;
  }
  set(pos, val) {
    let currentIndex = this.get(pos);
    if (currentIndex) {
      currentIndex.val = val;
      return true;
    }
    return false;
  }
  insert(pos, val) {
    if (pos < 0 || pos >= this.length) return false;
    if (pos === 0) {
      this.unshift(val);
      return true;
    }
    if (pos === this.length) {
      this.push(val);
      return true;
    }
    let newNode = new Node(val);
    let prev = this.get(pos - 1);
    let next = prev.next;
    prev.next = newNode;
    newNode.next = next;
    this.length++;
    return true;
  }
  remove(pos) {
    if (pos < 0 || pos >= this.length) return false;
    if (pos === 0) {
      this.shift();
      return true;
    }
    if (pos === this.length - 1) {
      this.pop();
      return true;
    }
    let prev = this.get(pos - 1);
    let removed = prev.next;
    prev.next = removed.bext;
    this.length--;
    return removed;
  }
}

let newList = new SinglyLinkedList();
newList.push("Hello");
newList.push("Isaac");
newList.push("Dong");
console.log(newList);
console.log(newList.head);
console.log(newList.head.next);
