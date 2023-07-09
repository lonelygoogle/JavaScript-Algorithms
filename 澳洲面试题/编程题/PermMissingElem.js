function solution(A) {
    // Implement your solution here
    let length = A.length, obj={},missing=1
    for (let item of A) {
        obj[item] = (obj[item]||0) + 1
    }
    for (let i=1; i<=length+1;i++) {
        if(!obj[i]) missing=i
    }
    return missing
}
let A = [2, 3, 1, 4]
console.log(solution(A))