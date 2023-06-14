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

// 遍历方法 维护为外部遍历 return void
var maxDepth = function (root) {
  let res = 0,
    depth = 0;
  function travesal(node) {
    if (node == null) {
      return;
    }
    // 前序位置
    depth++;
    if (node.left == null && node.right == null) {
      res = Math.max(res, depth);
    }
    travesal(node.left);
    travesal(node.right);
    // 后序位置
    depth--;
  }
  travesal(root);
  return res;
};

// 分解问题思路 分成左子树深度+1 或者右子树深度+1, 不用设置额外的外部变量 通过返回值取大累加
var maxDepth = function (root) {
  if (root == null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
