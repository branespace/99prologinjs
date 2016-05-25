var LinkedList = require('./linkedList.js');

function Stack() {
  this.list = new LinkedList();
  this.length = 0;
}

Stack.prototype.push = function(data) {
  this.list.insertEnd(data);
  this.length++;
};

Stack.prototype.pop = function() {
  var node = this.length.tail;
  this.list.remove(node);
  return node.value;
};

module.exports = Stack;
