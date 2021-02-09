/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let result = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '1') {
        result++
        dfs(grid, i, j)
      }
    }
  }
  function dfs(grid, i, j) {
    if (!inArea(grid, i, j)) return
    if (grid[i][j] !== '1') {
      return
    }
    grid[i][j] = '2'
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
  }
  function inArea(grid, i, j) {
    return 0 <= i && i < grid.length && 0 <= j && j < grid[0].length
  }
  return result
}

let arr = 
[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
console.log(numIslands(arr))