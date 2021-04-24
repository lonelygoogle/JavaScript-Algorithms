function Parent() {
  this.a = "Parent";
}
Parent.__proto__.print = function () {
  console.log('print方法执行');
  console.log('this', this);
  console.log(this.a);
};
// new Parent().p();
Parent.print();
var child = new Parent();
child.print();
