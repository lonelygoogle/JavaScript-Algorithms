console.log(1)
setTimeout(()=>{
  console.log(2)
  // throw Error('宏任务抛错')
  console.log(4)
},1000)

Promise.resolve('w').then((v)=>{
  throw Error('微任务抛错')
  console.log('微任务', v)
})
console.log(3)