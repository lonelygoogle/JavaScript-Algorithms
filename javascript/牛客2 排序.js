Array.prototype.quick = function quick() {
  let _this = this

  if (_this.length <= 1) {
    return _this
  }
  // 获取中间项，并且把中间项从数组中删除
  let middleIndex = Math.floor(_this.length / 2),
    middleValue = _this.splice(middleIndex, 1)[0]

  let arrLeft = [],
    arrRight = []

  for (let i = 0; i < _this.length; i++) {
    let item = _this[i]
    item < middleValue ? arrLeft.push(item) : arrRight.push(item)
  }
  return quick.call(arrLeft).concat(middleValue, quick.call(arrRight))
}

let arr = [12, 8, 24, 16, 1, 32, 10, 6, 89]
// arr = arr.quick()
// console.log(arr)

function quick(arr) {
  if (arr.length <= 1) return arr
  // 获取中间项，并且把中间项从数组中删除
  let middleIndex = Math.floor(arr.length / 2),
    middleValue = arr.splice(middleIndex, 1)[0],
    arrLeft = [],
    arrRight = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    item < middleValue ? arrLeft.push(item) : arrRight.push(item)
  }
  return quick(arrLeft).concat(middleValue, quick(arrRight))
  // return [...quick(arrLeft),middleValue, ...quick(arrRight)]
}

console.log(quick(arr))
