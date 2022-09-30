// 3. 有字符串 var = 'abc345efgabcab'，请写出 3 条 JS 语句分别实现如下 3 个功能：
// 1）去掉字符串中的a、b、c 字符，形成结果：'345efg'
// 2）将字符串中的数字用中括号括起来，形成结果：'abc3[5]efgabcab'
// 3）将字符串中的每个数字的值分别乘以 2，形成结果：'abc6810efgabcab'


let a = 'abc345efgabcab'
console.log( a.replace(/[a|b|c]/g, ''));
console.log(a.replace(/[0-9]/g, function (val) {
    return `[${val}]`
}))

console.log(a.replace(/[0-9]/g, function (val) {
    return `${(+val) *2}`
}))
