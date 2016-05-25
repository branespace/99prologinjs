var LinkedList = require('../common/datastructures/linkedList.js');

console.log('Find the nth element of a list');
console.log(' [ 1, 2, 3, 4, 5], n = 3');
console.log(' Correct result: 3');

var list = new LinkedList();
for(var i = 1; i <= 5; i++) {
  list.insertEnd(i);
}

console.log(' Actual result: ' + findnth(list, 3));

//Solution
function findnth(list, count) {
  if (list.head === null) {
    return 'empty list';
  }
  if (count === 1) {
    return list.head.value;
  }
  while (list.head.next !== null) {
    list.head = list.head.next;
    count--;
    if (count === 1) {
      return list.head.value;
    }
  }
  return 'count out of range';
}
