var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  set._start = 0
  set._end = 1
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = this._end
  this._end++
};

setPrototype.contains = function(item) {
  let obj = this._storage[item]
  return !obj ? false : true
};

setPrototype.remove = function(item) {
  delete this._storage[item]
  this._start++
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
