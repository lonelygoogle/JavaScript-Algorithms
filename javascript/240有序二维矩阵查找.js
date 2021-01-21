/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

let searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false
    let col = 0,
        row = matrix.length - 1
    while (row >= 0 && col <= matrix[0].length-1) {
        if (matrix[row][col] > target) {
            row--
        } else if (matrix[row][col] < target) {
            col++
        } else {
            return true
        }
    }
    return false
}
let matri = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]

let target = 20
console.log(searchMatrix(matri, target))
