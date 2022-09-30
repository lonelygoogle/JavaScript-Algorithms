var entryObj = {
	a: {
		b: {
			c: {
				dd: 'abcdd'
			}
		},
		d: {
			xx: 'adxx'
		},
		e: 'ae'
	}
}

function flat(obj, key = "", res = {}) { 
    for (let [k, v] of Object.entries(obj)) { 
      if (typeof v === "object") { 
        let tmp =key + k + "." 
        flat(v, tmp, res) 
      } else { 
        let tmp = key + k 
        res[tmp] = v 
      } 
    } 
    return res 
  }

  var result = flat(entryObj);
  console.log(result);
