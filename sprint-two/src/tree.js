var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newNode = Tree(value)
  this.children.push(newNode)

};

treeMethods.contains = function(target) {
  let found = false
  function searchTree(tree) {
    if (tree.value === target) {
      found = true
      return
    }
    if (tree.children.length < 1) {
      return
    }
    tree.children.forEach(child => searchTree(child))
  }

  searchTree(this)

  return found
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
