function solution(A) {
    // Implement your solution here
    const n = A.length,obj={}
    for (let i=0; i<n;i++) {
        if (obj[A[i]]) {
            return 0
        }
        // duplicate number in A
        obj[A[i]] =(obj[A[i]]||0)+1
    }
    for (let i=1; i<=n;i++) {
        if (!obj[i]) return 0
    }
    return 1
}

console.log(solution([4, 1, 3, 3]))