let url =
  "https://gitbook.cn/gitchat/geekbooks?tag=JavaScript&name=pwwu&age=24";


function UrlParams2Object (url) {
  let a = url.split("?");
  let keyValue = a[1].split("&");
  let obj = {};
  for (let value of keyValue) {
    let [key,v] = value.split('=')
    obj[key] = v
  }
  return obj
}

console.log(UrlParams2Object(url));
