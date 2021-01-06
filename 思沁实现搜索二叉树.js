class Node {
    constructor (element, parent) {
        this.element = element
        this.parent = parent
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor () {
        this.root = null
    }
    compare(e1,e2){
        // console.log(e1,e2)
        return e1 > e2
    }
    add (element) {
        if (this.root == null) {
            this.root = new Node(element, null)
            return
        }
        let currentNode = this.root
        let parent
        let compare
        while (currentNode) {
            compare = this.compare(currentNode.element,element)
            parent = currentNode
            if (compare) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        let node = new Node(element, parent)
        if (compare) {
            parent.left = node
        } else {
            parent.right = node
        }
    }
}

let tree = new Tree()
tree.add(10);
tree.add(8); // 我的逻辑就认为 不能存放相同的节点
tree.add(19);
tree.add(6);
tree.add(15);
tree.add(22);
tree.add(20);
// console.dir(tree,{depth:1000})

