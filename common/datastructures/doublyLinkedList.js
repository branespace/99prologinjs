function ListNode(data) {
  this.value = data;
  this.next = null;
  this.previous = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.insertBeginning = function(data) {
  var head = this.head;
  this.head = new ListNode(data);
  this.head.next = head;
  if (this.head.next !== null) {
    this.head.next.previous = this.head;
  } else {
    this.tail = this.head;
  }
  this.length++;
};

LinkedList.prototype.insertEnd = function(data) {
  if (this.head === null){
    this.head = new ListNode(data);
    this.tail = this.head;
  } else {
    var head = this.head;
    while(head.next !== null) {
      head = head.next;
    }
    head.next = new ListNode(data);
    head.next.previous = head;
    this.tail = head.next;
  }
  this.length++;
};

LinkedList.prototype.insertAt = function(data, index) {
  if (index <= this.length) {
    var node = this.head;
    for (var i = 0; i < index - 1; i++) {
      node = node.next;
    }
    var originalNext = node.next;
    node.next = new ListNode(data);
    node.next.previous = node;
    node.next.next = originalNext;
    if (originalNext === null) {
      this.tail = node.next;
    }
    this.length++;
  }
};

LinkedList.prototype.removeAt = function(index) {
  if (index >= this.length) || index < 0 {
    return false;
  }
  if (this.length === 1) {
    this.head = null;
    this.tail = null;
  }
  if (index === 0) {
    this.head = this.head.next;
    this.head.previous = null;
  } else if (index < this.length - 1) {
    var node = this.head;
    for (var i = 0; i < index - 1; i++) {
      node = node.next;
    }
    node.next = node.next.next;
    node.next.previous = node;
    this.length--;
  } else if (index > 0 || index <= this.length - 1) {
      
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
