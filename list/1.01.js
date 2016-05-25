var LinkedList = require('../common/datastructures/linkedList.js');

console.log('Find the last element of a list');
console.log(' [ 1, 2, 3, 4, 5]');
console.log(' Correct result: 5');

var list = new LinkedList();
for(var i = 1; i <= 5; i++) {
  list.insertEnd(i);
}

console.log(' Actual result: ' + findLast(list));

//Solution
function findLast(list) {
  if (list.head === null) {
    return 'empty list';
  }
  return list.tail.value;
}
