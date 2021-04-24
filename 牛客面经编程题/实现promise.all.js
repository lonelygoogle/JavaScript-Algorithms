function isPromise(val) {
  if ((typeof val === "object" && val !== null) || typeof val === "function") {
    if (typeof val.then == "function") {
      return true;
    }
  }
  return false;
}

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let times = 0;

    function collectResult(val, key) {
      arr[key] = val; 
      if (++times == promises.length) {
        resolve(arr);
      }
    }

    for (let i = 0; i < promises.length; i++) {
      let value = promises[i];
      if (value && isPromise(value)) {
        value.then((y) => {
          collectResult(y, i);
        },reject)
      } else {
        collectResult(value, i);
      }
    }
  });
};

let promise1 = new Promise(function (resolve) {
  resolve(1);
});
let promise2 = new Promise(function (resolve) {
  resolve(2);
});
let promise3 = new Promise(function (resolve) {
  resolve(3);
});

let promiseAll = Promise.all([promise1, promise2, promise3]);
promiseAll.then(function (res) {
  console.log(res);
});
