// 动态的加载js文件
function addScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }

// 设置一个全局的callback函数来接收回调结果
function handleRes(res) {
    console.log(res);
    }  

addScript("http://xxx.xxx.com/xxx.js?callback=handleRes");

// 接口返回的数据格式
handleRes({a: 1, b: 2});

// index.html
function jsonp({ url, params, callback }) {
    return new Promise((resolve, reject) => {
      let script = document.createElement('script')
      window[callback] = function(data) {
        resolve(data)
        document.body.removeChild(script)
      }
      params = { ...params, callback } // wd=b&callback=show
      let arrs = []
      for (let key in params) {
        arrs.push(`${key}=${params[key]}`)
      }
      script.src = `${url}?${arrs.join('&')}`
      document.body.appendChild(script)
    })
  }
  
jsonp({
url: 'http://localhost:3000/say',
params: { wd: 'Iloveyou' },
callback: 'show'
}).then(data => {
console.log(data)
})

// server.js
let express = require('express')
let app = express()
app.get('/say', function(req, res) {
  let { wd, callback } = req.query
  console.log(wd) // Iloveyou
  console.log(callback) // show
  res.end(`${callback}('我不爱你')`)
})
app.listen(3000)
  