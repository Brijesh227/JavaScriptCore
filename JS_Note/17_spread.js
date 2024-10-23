console.log(1);
setImmediate(() => {
  console.log(2);
});
setTimeout(() => {
  console.log(3);
}, 0);
process.nextTick(() => {
  console.log(4);
});
console.log(5);

console.log(1);
setImmediate(() => {
  console.log(2);
});
setTimeout(() => {
  console.log(3);
}, 10);
process.nextTick(() => {
  console.log(4);
});

// let i=0;
// while(i<=100000000){
//     i+=0.1;
// }
// console.log(5," ",i);
setTimeout(() => {
  console.log("3a");
}, 0);
process.nextTick(() => {
  console.log("4a");
});
console.log(5);

const a = [{name:'a',age:20}]
const b = [...a,{name:'b',age:30}]
b[0].name='c'
b[1].name='d'
console.log(a)
console.log(b)

const a = {name:'a',age:20}
const b = [{...a},{name:'b',age:30}]
b[0].name='c'
b[1].name='d'