function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

// 回调方式
// const task = (timer, light, callback) => {
//     setTimeout(() => {
//         if (light === 'red') {
//             red()
//         }
//         else if (light === 'green') {
//             green()
//         }
//         else if (light === 'yellow') {
//             yellow()
//         }
//         callback()
//     }, timer)
// }

// const step = () => {
//     task(3000, 'red', () => {
//         task(2000, 'green', () => {
//             task(1000, 'yellow', step)
//         })
//     })
// }
// step()

// promise方式
const task = (timer, light) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === 'red') {
                console.log(timer)
                red()
            }
            else if (light === 'green') {
                console.log(timer)
                green()
            }
            else if (light === 'yellow') {
                console.log(timer)
                yellow()
            }
            resolve()
        }, timer)
    })
// const step = () => {
//     task(3000, 'red')
//         .then(() => task(2000, 'green'))
//         .then(() => task(1000, 'yellow'))
//         .then(step)
// }
// step()

const taskRunner =  async () => {
    await task(3000, 'red')
    await task(2000, 'green')
    await task(1000, 'yellow')
    taskRunner()
}
taskRunner()
