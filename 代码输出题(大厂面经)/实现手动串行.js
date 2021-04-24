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
//new两个请求实例
let test1 = new Request('userinfo',1000)
let test2 = new Request('productinfo',2000)
//请求的串行
// test1.sendRequest().then(function (result) {
//   console.log(result)
//   test2.sendRequest().then(function (result) {
//       console.log(result)
//   })
// })
//请求的串行（then中使用箭头函数简化代码）
test1.sendRequest().then((result) => {
  console.log(result)
  test2.sendRequest().then(result=>console.log(result))
})
