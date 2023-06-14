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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  function traversal(node) {
    if (node == null) return 0;
    let leftMax = traversal(node.left);
    let rightMax = traversal(node.right);
    let myDiameter = leftMax + rightMax;
    maxDiameter = Math.max(maxDiameter, myDiameter);
    return 1 + Math.max(leftMax, rightMax);
  }
  traversal(root);
  return maxDiameter;
};
