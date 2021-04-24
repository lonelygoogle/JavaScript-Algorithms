let sum = (arr) => arr.reduce((a, b) => a + b, 0);

function asyncFn1() {
  let argsArr = Array.from(arguments);
  let args = argsArr.slice(0, argsArr.length - 1);
  let cb = argsArr[argsArr.length - 1];
  console.log("exec async Fn1", args);
  setTimeout(() => {
    cb(undefined, sum(args));
  }, 100);
}

function asyncFn2() {
  let argsArr = Array.from(arguments);
  let args = argsArr.slice(0, argsArr.length - 1);
  let cb = argsArr[argsArr.length - 1];
  console.log("exec async Fn2", args);
  setTimeout(() => {
    cb(new Error("error fn2"));
  }, 100);
}

function fn() {
  asyncFn1(1, 2, (err, ret) => {
    if (err) {
      console.error("exec fn1 err", err);
      return;
    }
    console.log("fn1 result", ret);
    asyncFn2(ret, 3, (err, ret) => {
      if (err) {
        console.error("exec fn2 err", err);
        return;
      }
      console.log("fn2 result", ret);
    });
  });
}

fn();