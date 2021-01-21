/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let num = 0
      result = null
  function middleBack(node) {
      if (!node) return
      middleBack(node.right)
      num++
      if (num == k) {
        result = node.val
        return
      }
      middleBack(node.left)
  }
  middleBack(root)
  return result
};