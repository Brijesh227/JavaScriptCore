// const { spawn } = require("child_process");
// const files = spawn("find . -type f | wc -l");
// console.log("num", files);

// "use strict"
// try {
//     let x;
// x = 12;
// console.log(x);
// } catch(e){
//     console.log(e);
// }

function* gen1(){
    console.log(yield 1)
    console.log(yield 2)
    console.log(yield 3)
}
const itr = gen1()
console.log(itr.next('a').value)
console.log(itr.next('b').value)
console.log(itr.next('c').value)