var isSymmetric = function(root) {
    function recur (left,right) {
        if (left == null && right == null) return true
        if (left == null || right == null || left.val !== right.val) return false
        return recur(left.left, right.right) && recur(left.right, right.left)
    }
    return root == null? true : recur(root.left, root.right)
};