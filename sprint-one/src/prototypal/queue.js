var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var queueObj = Object.create(queueMethods)
    queueObj._storage = {}
    queueObj._start = 0
    queueObj._end = 0

    return queueObj
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this._storage[this._end] = value
  this._end++
}

queueMethods.dequeue = function () {
  if (!this.size()) return null

  let value = this._storage[this._start]
  delete this._storage[this._start]
  this._start++

  return value
}

queueMethods.size = function () {
  return this._end - this._start
}


