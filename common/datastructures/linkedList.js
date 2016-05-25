//Adapted from the wikipedia implementation
//  http://en.wikipedia.org/wiki/Doubly_linked_list

function ListNode(data) {
  this.value = data;
  this.next = null;
  this.prev = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.insertAfter = function(node, data) {
  var newNode = new ListNode();
  newNode.value = data;
  newNode.prev = node;
  newNode.next = node.next;
  if (node.next === null) {
    this.tail = newNode;
  } else {
    node.next.prev = newNode;
  }
  node.next = newNode;
  this.length++;
};

LinkedList.prototype.insertBefore = function(node, data) {
  var newNode = new ListNode();
  newNode.value = data;
  newNode.prev = node.prev;
  newNode.next = node;
  if (node.prev === null) {
    this.head = newNode;
  } else {
    node.prev.next = newNode;
  }
  node.prev = newNode;
  this.length++;
};

LinkedList.prototype.insertBeginning = function(data) {
  if (this.head === null) {
    var newNode = new ListNode();
    newNode.value = data;
    this.head = newNode;
    this.tail = newNode;
    this.length++;
  } else {
    this.insertBefore(head, data);
  }
};

LinkedList.prototype.insertEnd = function(data) {
  if (this.head === null) {
    this.insertBeginning(data);
  } else {
    this.insertAfter(this.tail, data);
  }
}; 

LinkedList.prototype.remove = function(node) {
  if (node.prev === null) {
    this.head = node.next;
  } else {
    node.prev.next = node.next;
  }
  if (node.next === null) {
    this.tail = node.prev;
  } else {
    node.next.prev = node.prev;
  }
  this.length--;
};

LinkedList.prototype.toString = function() {
  var result = '[ ';
  if (this.head !== null) {
    var node = this.head;
    result += node.value;
    while(node.next !== null) {
      node = node.next;
      result += ', ' + node.value;
    }
  }
  result += ' ]';
  return result;
};

module.exports = LinkedList;
