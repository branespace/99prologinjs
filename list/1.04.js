var LinkedList = require('../common/datastructures/linkedList.js');

console.log('Find the number of items in a list');
console.log(' [ 1, 2, 3, 4, 5]');
console.log(' Correct result: 5');

var list = new LinkedList();
for(var i = 1; i <= 5; i++) {
  list.insertEnd(i);
}

console.log(' Actual result: ' + findLast(list.head));

//Solution
function findLast(head) {
  if (head === null) {
    return 0;
  }
  var count = 1;
  while (head.next !== null){
    count++;
    head = head.next;
  }
  return count;
}
