class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 创建一个二叉树示例
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);

// 遍历一遍二叉树得出答案
let preOrderTraversal = (node) => {
  let res = [];
  let travesal = (node) => {
    if (node == null) return;
    res.push(node.val);
    travesal(node.left);
    travesal(node.right);
  };
  travesal(node);
  return res;
};

// 通过分解问题计算答案
let preOrderTraversal2 = (node) => {
  let res = [];
  // 区别：1版本是return 这里是return []
  if (node == null) return res;
  res.push(node.val);
  res = res.concat(preOrderTraversal2(node.left));
  res = res.concat(preOrderTraversal2(node.right));
  return res;
};

let array = preOrderTraversal2(root);
console.log(array);
