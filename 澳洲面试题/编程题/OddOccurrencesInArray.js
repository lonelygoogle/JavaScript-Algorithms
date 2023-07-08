function solution(A) {
    // Implement your solution here
    let result
    let obj = {}
    for (let item of A) {
        obj[item] = (obj[item]||0) +1
    }
    Object.keys(obj).forEach(key=>{
        if (obj[key] %2 === 1) {
            result=key
        }
    })
    return Number(result) 
}

let A = [1,1,2,1,1,2,2,2,2,7,7]
console.log(solution(A))