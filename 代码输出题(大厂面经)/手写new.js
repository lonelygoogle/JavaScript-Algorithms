function Dog(name, age) {
  this.name = name;
}
Dog.prototype.bark = function () {
  console.log('wangwang');
}
Dog.prototype.sayName = function () {
  console.log('my name is ' + this.name);
}

function _new(Func, ...params) {
  let obj = Object.create(Func.prototype)
  let result = Func.call(obj, ...params)
  if (typeof result != null && (typeof rusult == 'object' ||typeof rusult == 'function')) return result
  return obj
}

let sanmao = _new(Dog, '三毛', 25);
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true