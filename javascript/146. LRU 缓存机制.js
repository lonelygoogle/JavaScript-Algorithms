class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.hash = {}
    this.count = 0
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get(key) {
    let node = this.hash[key]
    if (node == null) return -1 // 没值
    this.moveToHead(node) // 之前有值，把node移到链表的最前面，因为缓存空间满删除是删除最后的
    return node.value
  }

  put(key, value) {
    let node = this.hash[key]
    if (node == null) { // hash里面没有 说明是新值
      if (this.count == this.capacity) { // 缓存满了
        this.removeLRUItem()
      }
      let newNode = new ListNode(key, value)
      this.hash[key] = newNode // 很容易忘记把新节点放到hash表中
      this.addToHead(newNode)
      this.count++
    } else { // hash里面有值，说明之前就存在
      node.value = value // 赋值新的值 这里刚开始把value写成vulue
      this.moveToHead(node) //把新值移到最前面
    }
  }

  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node)
  }
  
  removeFromList(node) { // 双向链表的删除需要4步 O(1)时间复杂度
    let temp1 = node.prev
    let temp2 = node.next
    temp1.next = temp2
    temp2.prev = temp1
  }

  addToHead(node) { // 双向链表的插入也需要4步 O(1)时间复杂度
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }

  removeLRUItem() {
    let tail = this.popTail()
    delete this.hash[tail.key]
    this.count--
  }

  popTail() {
    let tail = this.dummyTail.prev // 拿到最后一个节点
    this.removeFromList(tail) // 删除节点
    return tail // 返回最后一个节点 用于删除哈希表的值
  }
}
