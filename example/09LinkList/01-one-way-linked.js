/**
 * 1. node + head + null
 * 2. head ---> null
 * 3. size 当前节点的个数
 * 4. next element
 * 5. 行为：增加、删除、修改、查询、清空
 */

class Node {
  constructor (element, next) {
    this.element = element
    this.next = next
  }
}


class LinkedList {
  constructor (head, size) {
    this.head = null
    this.size = 0
  }
  _getNode(index) {
    if (index < 0 || index > this.size) {
      throw new Error('越界了')
    }
    let currentNode = this.head
    for (let i=0; i<index; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  add(index, element) {
    if (arguments.length === 1) {
      element = index
      index = this.size
    }
    if (index < 0 || index > this.size) {
      throw new Error('cross the border')
    }
    if (index === 0) {
      let head = this.head
      this.head = new Node(element, head)
    } else {
      let preveNode = this._getNode(index - 1)
      preveNode.next = new Node(element, preveNode.next)
    }
    this.size++
  }
  remove(index) {
    if (index === 0) {
      let head = this.head
      this.head = head.next
    } else {
      let preveNode = this._getNode(index - 1)
      preveNode.next = preveNode.next.next
    }
    this.size--
  }
  set(index, element) {
    let node = this._getNode(index)
    node.element = element
  }
  get(index) {
    return this._getNode(index)
  }
  clear() {
    this.head = null
    this.size = 0
  }
}

const l1 = new LinkedList()
l1.add('node1')
l1.add('node2')
l1.add(1, 'new node')
// l1.remove(1)
l1.set(1, 'node3-3')
l1.clear()
console.log(l1)

// let a = l1.get(2)
// console.log(a)


