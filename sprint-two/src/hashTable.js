

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get a bucket
  var bucket = this._storage.get(index)
  //if a bucket does not exist, then create it
  if (!bucket) {
    bucket = []
  }
  //if a bucket exists
  //iterate over the bucket to find the tuple
  let found = false
  for (let i = 0; i < bucket.length; i++) {
    //if a tuple with the key is found, update the value
    var tuple = bucket[i]
    if (k === tuple[0]) {
      tuple[1] = v
      found = true
      break
    }
  }

  if (!found) {
    bucket.push([k,v])
    this._storage.set(index, bucket)
  }

  //if not then add the tuple


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)

  if (!bucket) {
    return null
  }

  let found = false
  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]
    if (k === tuple[0]) {
      return tuple[1]
    }
  }

  return
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)

  if (!bucket) {
    return null
  }

  let found = false
  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]
    if (k === tuple[0]) {
      bucket.splice(i,1)
      return tuple
    }
  }

  return
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


