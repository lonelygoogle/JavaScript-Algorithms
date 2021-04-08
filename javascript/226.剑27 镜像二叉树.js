// 队列实现 数组塌陷问题
var mirrorTree = function(root) {
    if (!root) return root;
    const stack = [root]
    let current = null
    while (current = stack.shift()) {
        const left = current.left
        const right = current.right
        current.left = right
        current.right = left
        if (left) {
            stack.push(left)
        }
        if (right) {
            stack.push(right)
        }
    }
    return root
};

// 队列指针移动 
var mirrorTree2 = function(root) {
    if (!root) return root;
    const stack = [root]
    let current = null
    let index = 0
    while (current = stack[index++]) {
        const left = current.left
        const right = current.right
        current.left = right
        current.right = left
        if (left) {
            stack.push(left)
        }
        if (right) {
            stack.push(right)
        }
    }
    return root
};
var invertTree = function(root) {
    if (!root) return root;
    // 递归
    //   const left = root.left;
    //   const right = root.right;
    //   root.right = invertTree(left);
    //   root.left = invertTree(right);
    //   return root
    // 我们用stack来模拟递归
    // 本质上递归是利用了执行栈，执行栈也是一种栈
    // 其实这里使用队列也是一样的，因为这里顺序不重要
  
    const stack = [root];
    let current = null;
    while ((current = stack.shift())) {
      const left = current.left;
      const right = current.right;
      current.right = left;
      current.left = right;
      if (left) {
        stack.push(left);
      }
      if (right) {
        stack.push(right);
      }
    }
    return root;
  };
