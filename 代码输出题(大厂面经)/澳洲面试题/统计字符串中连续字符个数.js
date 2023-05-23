const s = 'AAbbcDDD'

function countCha (s) {
    let n=s.length ,left=0,right=1,output= '',count=1;
    s = s + ' '
    while (right <=n) {
        if (s[left] == s[right]) {
            right++
        }else {
            count = right -left
            output += s[left] +(right - left)
            left = right
        }
    }
    return output
}

console.log('countCha(s)', countCha(s));