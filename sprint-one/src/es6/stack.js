class Stack {
  constructor(){
    this.storage ={}
    this.stackSize = 0
  }

  push (value) {
    this.storage[this.stackSize++] = value
  }

  pop () {
    if (this.stackSize === 0) return null
    let temp = this.storage[--this.stackSize]
    return temp
  }

  size () {
    return this.stackSize
  }

}