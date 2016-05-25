var LinkedList = require('../common/datastructures/linkedList.js');

var list = new LinkedList();
for(var i = 1; i <= 5; i++) {
  list.insertEnd(i);
}

console.log('Determine if a list is a palindrome')
console.log(' [ 1, 2, 3, 4, 5 ]');
console.log(' Correct result: false');
console.log('  Actual result: ' + palindrome(list));

list = new LinkedList();
list.insertEnd(5);
list.insertEnd(4);
list.insertEnd(3);
list.insertEnd(4);
list.insertEnd(5);
console.log(' [ 5, 4, 3, 4, 5 ]');
console.log(' Correct result: true');
console.log('  Actual result: ' + palindrome(list));

//Solution
function palindrome(list) {
  if (list.length === 0) {
    return false;
  }
  var left = list.head;
  var right = list.tail;
  for (var i = 0; i < list.length / 2; i++) {
    if (left.value !== right.value) {
      return false;
    }
    left = left.next;
    right = right.prev;
  }
  return true;
}
