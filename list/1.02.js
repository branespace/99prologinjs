var LinkedList = require('../common/datastructures/linkedList.js');

console.log('Find the next to last element of a list');
console.log(' [ 1, 2, 3, 4, 5]');
console.log(' Correct result: 4');

var list = new LinkedList();
for(var i = 1; i <= 5; i++) {
  list.insertEnd(i);
}

console.log(' Actual result: ' + findNextToLast(list.head));

//Solution
function findNextToLast(head) {
  if (head === null || head.next === null) {
    return 'list is too short';
  }
  while (head.next.next !== null) {
    head = head.next;
  }
  return head.value;
}
