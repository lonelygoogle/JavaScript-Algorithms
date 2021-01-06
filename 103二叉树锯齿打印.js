/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (root == null) {
        return []
    }
    const stack = [root]
    const arr = []
    let current = null
    while (current = stack.shift()) {
        arr.push(current.val)
        if (current.left) {
            stack.push(current.left)
        }
        if (current.right) {
            stack.push(current.right)
        }
    }
    return arr
};

// 逐行锯齿打印
var zigzagLevelOrder = function(root) {
    if (root == null) {
        return []
    }
    const stack = [root]
    const arr = []
    let current = null
    let leftOrder = true
    while (stack.length !== 0) {  // [3 9 20 ]
        let tmp = []
        for (let i = stack.length; i>0; i--){
            let current = stack.shift()
            if (leftOrder) {
                tmp.push(current.val)
            } else {
                tmp.unshift(current.val)
            }
            // leftOrder = !leftOrder
            if (current.left) {
                stack.push(current.left)
            }
            if (current.right) {
                stack.push(current.right)
            }
        }
        arr.push(tmp)
        leftOrder = !leftOrder
    }
    return arr
};