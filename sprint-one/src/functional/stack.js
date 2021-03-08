var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let stackSize = 0

  // Implement the methods below
  someInstance.push = function(value) {
    stackSize++
    storage[stackSize] = value
  };

  someInstance.pop = function() {
    if(!stackSize) return

    let value = storage[stackSize]
    delete storage[stackSize]
    stackSize--

    return value
  };

  someInstance.size = function() {
    return stackSize
  };

  return someInstance;
};
