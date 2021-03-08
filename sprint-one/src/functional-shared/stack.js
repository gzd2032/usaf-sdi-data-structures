var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {}

  obj._storage = {}
  obj._stackSize = 0

  _.extend(obj, stackMethods)
  // obj.push = stackMethods.push
  // obj.pop = stackMethods.pop
  // obj.size =stackMethods.size

  return obj
};

const stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._stackSize++] = value
}

stackMethods.pop = function() {
  if (!this._stackSize) return
  this._stackSize--
  var value = this._storage[this._stackSize]
  delete this._storage[this._stackSize]
  return value
}

stackMethods.size = function(){
  return this._stackSize
}
