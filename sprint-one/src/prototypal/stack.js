var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = Object.create(stackMethods)
  stackObj._stackSize = 0
  stackObj._storage = {}

  return stackObj
};

var stackMethods = {};

stackMethods.push = function (value) {
  this._storage[this._stackSize] = value
  this._stackSize++
}

stackMethods.pop = function () {
  if (!this.size()) return null
  this._stackSize--
  let value = this._storage[this._stackSize]
  delete this._storage[this._stackSize]
  return value
}

stackMethods.size = function () {
  return this._stackSize
}
