
async function a(){
  console.log('await start')
  await 10
  console.log('await end')
}

setTimeout(()=>{
  console.log('0')
})

console.log('start')

a()

new Promise((res) => {
  console.log('promise')
  res(0)
  }).then(() => {
  console.log('then')
})

console.log('end')