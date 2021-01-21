var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0,n)
};

// 不可用切片函数的方法
var reverseLeftWords = function(s, n) {
    let res = ''
    for (let i = n ; i < s.length; i++) {
        res += s.charAt(i)
    }
    for (let i = 0 ; i < n; i++) {
        res += s.charAt(i)
    }
    return res
};

// 不可用切片函数的方法 用取余优化
var reverseLeftWords = function(s, n) {
    let res = ''
    for (let i = n ; i <  n + s.length; i++) {
        res += s.charAt(i % s.length)
    }
    return res
};

let s = "lrloseumgh"
    k = 6

console.log(reverseLeftWords(s,k))
// console.log(s.charAt(3))