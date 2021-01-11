/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null
  const root = new TreeNode(preorder[0])
   // mid是中序遍历根节点的索引, 也是前序遍历中左子树的数量
  const mid = inorder.indexOf(preorder[0]) 
  root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1))
  return root
};

// 哈希表优化算法
const buildTree = (preorder, inorder) => {
  const map = new Map();
  for (let i=0; i< inorder.length; i++) {
      map.set(inorder[i], i)
  }
  const helper = (p_start, p_end, i_start, i_end) => {
  if (p_start > p_end) return null;
  let rootVal = preorder[p_start];
  let root = new TreeNode(rootVal);
  let mid = map.get(rootVal)
  let leftNum = mid - i_start;
  root.left = helper(p_start+1,p_start+leftNum,i_start,mid-1)
  root.right = helper(p_start+1+leftNum,p_end,mid+1,i_end)
  return root
};
return helper(0, preorder.length - 1, 0, inorder.length - 1);
};