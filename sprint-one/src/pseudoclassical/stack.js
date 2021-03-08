var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {}
  this._stackSize = 0
};

Stack.prototype.push = function (value) {
  this._storage[this._stackSize++] = value
}

Stack.prototype.pop = function () {
  if (!this.size()) return null

  let value = this._storage[--this._stackSize]
  delete this._storage[this._stackSize]

  return value
}

Stack.prototype.size = function () {
  return this._stackSize
}
