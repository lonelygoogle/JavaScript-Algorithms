/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  let map = new Map()
  function subRob (root) {
    if (root == null) return 0
    if (map.has(root)) return map.get(root)
    // 打劫这家和下下家
    let do_it =
      root.val +
      (root.left == null ? 0 : subRob(root.left.left) + subRob(root.left.right)) +
      (root.right == null ? 0 : subRob(root.right.left) + subRob(root.right.right))
    // 不打劫这家
    let not_do = subRob(root.left) + subRob(root.right)
    let res = Math.max(do_it,not_do)
    map.set(root,res)
    return res
  }
  return subRob(root)
}
