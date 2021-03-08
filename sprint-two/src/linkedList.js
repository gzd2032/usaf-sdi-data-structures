var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    let newNode = new Node(value)

    if (list.head === null) {
      list.head = newNode
    }

    if (list.tail !== null) list.tail.next = newNode
    list.tail = newNode
  };

  list.removeHead = function() {
    if (list.head === null) return null

    let temp = list.head
    let value = list.head.value
    list.head = list.head.next
    delete temp

    return value
  };

  list.contains = function(target) {

    let finder = list.head

    while(finder.value !== target && finder.next !== null) {
      finder = finder.next
    }

    return finder.value === target || false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
