/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const plusOne = (s, j) => {
  let ch = s.split("");
  if (ch[j] == 9) {
    ch[j] = 0;
  } else {
    ch[j] = Number(ch[j]) + 1;
  }
  return ch.join("");
};

const minusOne = (s, j) => {
  let ch = s.split("");
  if (ch[j] == 0) {
    ch[j] = 9;
  } else {
    ch[j] = Number(ch[j]) - 1;
  }
  return ch.join("");
};
var openLock = function (deadends, target) {
  let queue = ["0000"];
  const deads = new Set(deadends),
    visited = new Set();
  let step = 0;
  visited.add("0000");
  while (queue.length > 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let cur = queue.shift();
      // 判断是否达到终点
      if (deads.has(cur)) {
        continue;
      }
      if (cur === target) {
        return step;
      }

      // 向四周扩散
      for (let j = 0; j < 4; j++) {
        const up = plusOne(cur, j);
        if (!visited.has(up)) {
          queue.push(up);
          visited.add(up);
        }
        const down = minusOne(cur, j);
        if (!visited.has(down)) {
          queue.push(down);
          visited.add(down);
        }
      }
    }
    step++;
  }
  return -1;
};

let deadends = ["0201", "0101", "0102", "1212", "2002"],
  target = "0202";
console.log(openLock(deadends, target));

const bfs = (target) => {
  let queue = ["0000"];
  while (queue.length > 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let cur = queue.shift();
      // 判断是否达到终点
      console.log(cur);
      // 向四周扩散
      for (let j = 0; j < 4; j++) {
        const up = plusOne(cur, j);
        const down = minusOne(cur, j);
        queue.push(up, down);
      }
    }
  }
};
