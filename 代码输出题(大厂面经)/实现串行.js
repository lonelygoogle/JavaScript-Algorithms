class Request{
  //连个属性
  constructor(name,delay) {
      this.name = name;
      this.delay =delay
  }
//发送请求的方法
  sendRequest(){
      let time = this.delay
      return new Promise(function (resolve, reject) {
              setTimeout(()=>resolve('status: ok '+' | runtime：'+time+'ms'),time)
      })
  }
}

var createPromise = function(time) {
  return (resolve, reject)=>
  new Promise((resolve, reject)=>{
      setTimeout(()=>{
          console.log('timein'+time)
          resolve();
      }, time*1000)
  })
}

function serpromise(arr) {
  arr.reduce((cur,next)=> {
    return cur.then(next)
  }, Promise.resolve())
}
let test1 = new Request('userinfo',1000)
let test2 = new Request('productinfo',2000)
let test3 = new Request('salaryinfo',3000)

var arr=[test1,test2,test3];
// var arr=[test1,test2,test3];
// Promise.resolve().then(createPromise(2)).then(createPromise(1))
serpromise(arr)