function Foo(){
  function getname(){
    console.log(4);
  }
}
Foo.prototype.getname=function(){
  console.log(3);
}
function Foo2(){
  Foo2.getname=function(){
    console.log(2);
  }
}
Foo2.prototype= Foo.prototype;
let obj=new Foo2()
obj.getname()