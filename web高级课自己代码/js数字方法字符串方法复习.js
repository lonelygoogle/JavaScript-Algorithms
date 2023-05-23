// let arr = [1, 2, 3, 1]
// console.log(rob(arr))

// let items = new Array(1,2) ;
// console.log(items.length) ; // 2
// console.log(items[0]) ; // undefined
// console.log(items[1]) ;

// const array1 = [22, 3, 31, 12, 'arr'];
// const includes = array1.includes(31);
// console.log(includes); // true

// const includes1 = array1.includes(31, 2); // 从索引3开始查找31是否存在
// console.log(includes1); // false

// let arr = [1,2,3,4,5]
// arr.reduce((prev,cur,index,arr)=>{
//   console.log('prev', prev);
//   console.log('cur', cur);
//   console.log('index', index);
//   // console.log('arr', arr);
//   return prev+cur
// }, 10)

// let promiseFn = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('resolve1')
//       resolve()
//     }, 1000)
//   })
// }
// let promiseFn2 = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('resolve2')
//       resolve()
//     }, 1000)
//   })
// }
// let promiseFn3 = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('resolve3')
//       resolve('last resolve')
//     }, 1000)
//   })
// }
// let pro = [promiseFn, promiseFn2, promiseFn3].reduce((p, f) => {
//   return p.then(f)
// }, Promise.resolve()) // 提供initialValue，从第一个参数遍历
// pro.then(res => {
//   console.log('res', res)
// })

// var dt = new Date();
// console.log(dt.toLocaleString());
//2018/1/4 下午10:32:18
// console.log(dt.toString());
//Thu Jan 04 2018 22:32:18 GMT+0800 (中国标准时间)

// const array1 = [22, 3, 31, 12];
// const str = array1.toLocaleString();
// const str1 = array1.toString();
// let a = 6666
// const str3 = a.toString();
// const str4 = a.toLocaleString();

// console.log(str); // 22,3,31,12
// console.log(str1); // 22,3,31,12
// console.log(str3); 
// console.log(str4); 

// let arr = [1, 2, 3, 'arr', 5, 1, 9];

// console.log(arr.find((value, index, arr) => {
//     console.log('value', value);
//     console.log('index', index);
//     return value > 8;
// })); // 3 返回匹配的值

// console.log(arr.findIndex((value, keys, arr) => {
//     return value > 8;
// })); // 2 返回匹配位置的索引

//将数组的前两个元素复制到数组的最后两个位置
let arr = [1, 2, 3, 'arr', 5,6];

// arr.copyWithin(4, 1);
// console.log(arr);//[1,2,3,1,2]

// var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// let arr5=arr4.flat(1);
// console.log('arr4', arr5);

// console.log('flatMap', [2, 3, 4].flatMap((x) => [x, x * 2]));


// for (let index of ['a', 'b'].keys()) {  
//     console.log(index);  
//     }  
//     // 0  
//     // 1  
//     for (let elem of ['a', 'b'].values()) {  
//     console.log(elem);  
//     }  
//     // 'a'  
//     // 'b'  
//     for (let [index, elem] of ['a', 'b'].entries()) {  
//     console.log(index, elem);  
//     }  
//     // 0 "a"  
//     // 1 "b" 

// let str1='clean '
// let str2='code '
// console.log(str1.concat(str2));


// const strStartsWith='可惜没有如果';
// const strStartsWithResult=strStartsWith.startsWith('可惜');
// const strStartsWithResult1=strStartsWith.startsWith('如果');
// console.log('startsWith',strStartsWithResult,strStartsWithResult1);

    //1.只替换首个匹配（如果需要都匹配修改可以使用正则表达式，但是不能使用引号）
    //2.对大小写敏感
    //3.不会改变调用它的字符串，它返回的是新的字符串
    // const strReplace='you my love';
    // const strReplaceResult=strReplace.replace('y','小偷');//默认匹配第一个符合的
    // const strReplaceResultAll=strReplace.replace(/y/g,'贼');//使用正则表达式实现全局匹配
    // console.log('replace',strReplaceResult,strReplaceResultAll);
    // let str = "0123456789";
    // console.log(str.slice(3));
    // console.log(str.slice(-3));
    // console.log(str.slice(3, 5));
    // console.log(str.slice(3, -3));
    // str.slice(3) // "3456789"
    // str.slice(-3) // "789"
    // str.slice(3, 5) // "34"
    // str.slice(3, -3) // "3456"
    let myString = 'hellow';
let newStr1 = myString.replace('l', "w"); // "hewlow"
let newStr2 = myString.replaceAll('l', "w"); // "hewwow" 
console.log('newStr1', newStr1);
console.log('newStr2', newStr2);