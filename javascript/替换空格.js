const replaceSpace = (str) => {
    return str.replaceAll(' ', '%20')
}


const indentPrint = (n) => {
    for (let i=0; i<n; i++) {
        let str2 = ' '.repeat(i)
        console.log(`${str2}%s`, i);
    }
}

indentPrint(4)