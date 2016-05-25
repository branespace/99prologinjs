var LinkedList = require('./linkedList.js');

console.log('Building List');
var list = new LinkedList();

console.log('Adding to end (2, 3, 4)');
list.insertEnd(2);
list.insertEnd(3);
list.insertEnd(4);
console.log(list.toString());

console.log('Adding to beginning (1)');
list.insertBeginning(1);
console.log(list.toString());

console.log('Adding to middle (2.5)');
list.insertAt(2.5, 2);
console.log(list.toString());

console.log('Removing that new value');
list.removeAt(2);
console.log(list.toString());
