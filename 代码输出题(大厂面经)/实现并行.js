//请求类
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
let test1 = new Request('userinfo', 1000)
let test2 = new Request('productinfo', 2000)
let test3 = new Request('productinfo', 5000)
let container = [test1.sendRequest(),test2.sendRequest(),test3.sendRequest()]

Promise.all(container).then(
    result=> {
        console.log(result)
    }
    // console.log('end')
)