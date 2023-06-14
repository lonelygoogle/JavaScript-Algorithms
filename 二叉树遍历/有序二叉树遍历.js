class Node {
    constructor (element, parent) {
        this.element = element
        this.parent = parent
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor (compare) {
        this.root = null
        this.compare = compare || this.compare // 可以传入自定义比较函数
    }
    compare(e1,e2){
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
    // 固定函数打印的前序遍历
    preorderTraversal () {
        function traversal (node) {
            if (node == null) return 
            console.log(node.element)
            traversal(node.left)
            traversal(node.right)
        }
        traversal(this.root)
    }
    // 传递自定义函数的前序遍历
    preorderTraversal (callback) {
        function traversal (node) {
            if (node == null) return 
            callback(node)
            traversal(node.left)
            traversal(node.right)
        }
        traversal(this.root)
    }

    // 中序遍历
    inOrderTraversal (callback) {
        function traversal (node) {
            if (node == null) return
            traversal(node.left)
            callback(node)
            traversal(node.right)
        }
        traversal(this.root)
    }

    // 后序遍历
    postOrderTraversal (callback) {
        function traversal (node) {
            if (node == null) return
            traversal(node.left)
            traversal(node.right)
            callback(node)
         }
        traversal(this.root) // 必须传入根节点 否则直接return
    }


    leveloderTraversal (callback) {
        if (this.root == null) return
        let queue = [this.root]
        while (queue.length !== 0) {
            let node = queue.shift() // [10 8 19]
            callback(node)
            if (node.left !== null ) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        }
    }

    reverseTree () {
        if (this.root == null) return
        let queue = [this.root]
        while (queue.length !== 0) {
            let node = queue.shift() // [10 8 19]
            let temp = node.left
            node.left = node.right
            node.right = temp
            if (node.left !== null ) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        }
        return this.root
    }
}

// 添加， 遍历树 ，反转  二叉搜索树 必须数据要具备可比较性
let tree = new Tree((e1, e2) => { // 自定义比较器
    return e1.id > e2.id
});
tree.add({ id: 10, element: { name: 'zf1' } });
tree.add({ id: 8, element: { name: 'zf2' } });
tree.add({ id: 19, element: { name: 'zf3' } });
tree.add({ id: 6, element: { name: 'zf4' } });
tree.add({ id: 15, element: { name: 'zf5' } });
tree.add({ id: 22, element: { name: 'zf6' } });
tree.add({ id: 20, element: { name: 'zf7' } });

// tree.inOrderTraversal(node=> {
//     console.log(node.element)
// })

console.dir(tree.reverseTree(), {depth: 1000})