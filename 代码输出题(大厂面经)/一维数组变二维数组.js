function dimensionOneToTwo (arr, n) {
  let result = []
  for (let i=0; i<arr.length; i+=n) {
    result.push(arr.slice(i,i+n))
  }
  return result
}
const arr=[1,2,3,4,5,6,7,8,9,10]
console.log('', dimensionOneToTwo(arr,3));