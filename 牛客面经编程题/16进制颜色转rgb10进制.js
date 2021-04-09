// 16进制转10进制
// console.log('16转10',parseInt('CC', 16));
// let a = 255
// console.log('10转16', a.toString(16));

let color = '#CC11AB'
// let first = parseInt(color.slice(1,3), 16)
// console.log('f', first);
function trans (color,a,b) {
  return parseInt(color.slice(a,b), 16)
}
// let rgb = `(${trans(1,3)},${trans(3,5)},${trans(5,7)})`
function sixteenToRGB (color) {
  return `(${trans(color,1,3)},${trans(color,3,5)},${trans(color,5,7)})`
}
console.log('rgb', sixteenToRGB(color));