function sequence(funcs) {
  let i = 0;
  return function run(cb, data) {
    if (i === funcs.length) return cb(undefined, data);

    funcs[i++].call(this, (error, value) => {
      if (error) {
        cb(error);
        return;
      }
      run(cb, value);
    }, data);
  }
}