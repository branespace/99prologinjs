function ListNode(data) {
  this.value = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.insertBeginning = function(data) {
  var head = this.head;
  this.head = new ListNode(data);
  this.head.next = head;
  this.length++;
};

LinkedList.prototype.insertEnd = function(data) {
  if (this.head === null){
    this.head = new ListNode(data);
  } else {
    var head = this.head;
    while(head.next !== null) {
      head = head.next;
    }
    head.next = new ListNode(data);
  }
  this.length++;
};

LinkedList.prototype.insertAt = function(data, index) {
  if (index <= this.length) {
    var node = this.head;
    for (var i = 0; i < index - 1; i++) {
      node = node.next;
    }
    var next = node.next;
    node.next = new ListNode(data);
    node.next.next = next;
    this.length++;
  }
};

LinkedList.prototype.removeAt = function(index) {
  if (index <= this.length) {
    var node = this.head;
    for (var i = 0; i < index - 1; i++) {
      node = node.next;
    }
    node.next = node.next.next;
    this.length--;
  }
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
