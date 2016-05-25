var LinkedList = require('../common/datastructures/linkedList.js');

console.log('Reverse a list');
console.log(' [ 1, 2, 3, 4, 5 ]');
console.log(' Correct result: [ 5, 4, 3, 2, 1 ]');

var list = new LinkedList();
for(var i = 1; i <= 5; i++) {
  list.insertEnd(i);
}

console.log('  Actual result: ' + reverse(list).toString());

//Solution
function reverse(list) {
  if (list.length >= 1) {
    var head = list.head;
    list.head = list.tail;
    list.tail = head;
    var node = list.head;
    while (node !== null) {
      var next = node.next;
      node.next = node.prev;
      node.prev = next;
      node = node.next;
    }
  }
  return list;
}
