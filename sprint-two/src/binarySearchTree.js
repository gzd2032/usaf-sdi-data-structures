var BinarySearchTree = function(value) {
  var obj = {}

  obj.value = value
  obj.left = null
  obj.right = null

  obj.insert = function(input) {
    if (this.value === null) {
      this.value = input
    } else {

      let finder = this
      while (finder) {
        if (input > finder.value) {
          if (finder.right === null) {
            finder.right = new BinarySearchTree(input)
            return
          } else {
            finder = finder.right
          }
        } else {
          if (finder.left === null) {
            finder.left = new BinarySearchTree(input)
            return
          } else {
            finder = finder.left
          }
        }

      }

    }

  }

  obj.contains = function (target) {
    if (this.value === null) {
      return false
    } else {

      let finder = this
      while (finder.value && finder.value !== target) {
        if (target > finder.value) {
            if (finder.right !== null) {
              finder = finder.right
            } else {
              return false
            }
          } else {
            if (finder.left !== null) {
              finder = finder.left
            } else {
              return false
            }
          }
      }
      return finder.value === target
    }

  }

  obj.depthFirstLog = function (callback) {


    function searchTree(finder) {
      const value = finder.value
      if (value !== null) {
        callback(value)
      } else {
        return
      }

      if (finder.left !== null) searchTree(finder.left)
      if (finder.right !== null) searchTree(finder.right)

      return
    }

    searchTree(this)
  }

  return obj
};


/*
 * Complexity: What is the time complexity of the above functions?  O(n^2)
 */
