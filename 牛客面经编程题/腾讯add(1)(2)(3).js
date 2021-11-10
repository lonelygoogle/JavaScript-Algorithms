// ES5版本
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

// ES6版本
// const curry = (fn, ...args) => 
//   args.length >= fn.length ?
//   fn(...args) :
//   (..._args)=> curry(fn, ..._args, ...args)
  function add1(x, y, z) {
  return x + y + z
}
const add = curry(add1)
console.log(add(1, 2, 3))
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1)(2, 3))
