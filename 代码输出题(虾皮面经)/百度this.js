var name= 'lilei';
var obj = {
  name: 'hanmeimei',
  showName: function(){
    console.log('this', this)
    console.log(this.name);
  }
}
setTimeout(obj.showName, 500) 
// obj.showName()
// setTimeout(()=>{console.log('this', this);})