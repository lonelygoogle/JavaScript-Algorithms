var a = 100;
function fn() {
  alert(a);
  var a = 200;
  alert(a);
}
fn();  // undefined 200
alert(a); // 100
var a; 
alert(a); // undefined
var a = 300;
alert(a); // 300


var obj1 = {name: 'obj1', fn: function() {
  console.log(this.name);
}};
var obj2 = {name: 'obj2'};
var obj3 = {name: 'obj3'};
obj1.fn();  // obj1
var newFn = obj1.fn;
newFn(); // undefined
newFn.call(obj2);  // obj2
obj3.fn = newFn; 
obj3.fn();  // undefined

// 5. 并说出下面代码的运行结果。
// console.log('a');
// setTimeout(() => {
//    console.log('b');
// }, 0);
// console.log('c');
// Promise.resolve().then(() => {
//    console.log('d');
// })
// .then(() => {
//    console.log('e');
// });

a
c
d
b 
e



