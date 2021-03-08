var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = start;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value
    end++
  };

  someInstance.dequeue = function() {
    if(end === start) {
      start = 0
      end = 0
      return null
    }
    let value = storage[start]
    delete storage[start]
    start++

    return value
  };

  someInstance.size = function() {
    return end - start
  };

  return someInstance;
};
