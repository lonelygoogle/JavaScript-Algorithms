/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root == null) return 0
  let depth = 1
  let queue = [root]
  while (queue.length !== 0) {
    const levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      node = queue.shift()
      if (node.left == null && node.right == null) return depth
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    depth++
  }
  return depth
}
