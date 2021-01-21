/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  function recur(postorder, i, j) {
    let m,
      p = i
    if (i >= j) return true
    while (postorder[p] < postorder[j]) p++
    m = p
    while (postorder[p] > postorder[j]) p++
    return p == j && recur(postorder, i, m-1) && recur(postorder, m, j-1)
  }
  return recur(postorder, 0, postorder.length - 1)
}

let arr = [1,3,2,6,5]
console.log(verifyPostorder(arr))