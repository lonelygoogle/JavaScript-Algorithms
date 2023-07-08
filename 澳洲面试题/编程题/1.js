function solution(A) {
    // Implement your solution here
    let obj = {}
    for (let n of A) {
        obj[n] = (obj[n] || 0) +1
    }
    for(let i=1; i< 1000000; i++) {
        if(!obj[i]) {
            return i
        }
    }
    return -1
}

function solution2(A) {
    // Implement your solution here
    let numberSet = new Set()
    for (let n of A) {
        numberSet.add(n)
    }
    console.log(numberSet)
    for(let i=1; i<= 1000000 ; i++) {
        if(!numberSet.has(i)) {
            return i
        }
    }
    return -1
}

// console.log(solution2([1, 3, 6, 4, 1, 2]))
var x = 1041;
console.log(x.toString(2)); 