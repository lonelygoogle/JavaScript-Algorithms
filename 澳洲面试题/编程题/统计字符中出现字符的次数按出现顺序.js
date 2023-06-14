// Return distinct values and their counts from a list including duplicates
// (i.e. "1 3 5 3 7 3 1 1 5" -> " 1(3) 3(3) 5(2) 7(1)")
let string = "1 3 5 3 7 3 1 1 5";

let cal = (str) => {
  const arr = str.split(" ");
  let obj = {};
  for (let v of arr) {
    obj[v] = (obj[v] || 0) + 1;
  }
  let output = "";
  for (let key in obj) {
    output += `${key}(${obj[key]}) `;
  }
  return output;
};

console.log(cal(string));

let calMap = (str) => {
  const arr = str.split(" ");
  const map = new Map();
  for (let v of arr) {
    if (map.has(v)) {
      map.set(v, map.get(v) + 1);
    } else {
      map.set(v, 1);
    }
  }
  let output = "";
  for (const [key, value] of map.entries()) {
    output += `${key}(${value}) `;
  }
  return output;
};

console.log(calMap(string));
