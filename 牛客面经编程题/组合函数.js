function afn(a){
    return a*2;
}
function bfn(b){
    return b*3;
}
const compose2 = (a,b)=>c=>a(b(c));
// const compose = function (a,b) {
//     return function (c) {
//         return a(b(c))
//     }
// }

let myfn =  compose2(afn,bfn);
console.log( myfn(2));

const wordNum = str=>str.match(/[\w]+/g);
const countFn = arr=>arr.length;
const oddOrEven = num=>num%2===0?"偶数":"奇数";

let str = "Mamba Out，Mamba Never Out";


const compose = (...fns) => val => fns.reduce((acc,fn)=> fn(acc),val)
const myFn = compose(wordNum,countFn,oddOrEven)
console.log(myFn(str));