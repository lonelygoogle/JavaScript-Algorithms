
function Parent(){
   this.a = 'Parent';
}
function Tom() {
   this.a = 'Tom'
}
Parent.__proto__.print = function(){
   console.log('this', this)
   console.log(this.a)
}
Parent.print()
Tom.print()
var child = new Parent()
// console.log('child', child)
child.print()