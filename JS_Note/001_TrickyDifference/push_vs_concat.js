// push modeify same array and return new length
// concat does not modify same array but return new array

const res = [1];
res.push(2);
console.log(res)        // [1,2]

const arr = [1];
let arr2 = [];
arr.concat(2);
arr2 = arr.concat(2);
console.log(arr)        // [1]
console.log(arr2);      // [1,2]


const a1 = [1];
a1.push([2,3])
console.log(a1);        // [1,[2,3]]

let a2 = [1];
a2 = a2.concat([2,3]);
console.log(a2);        // [1,2,3]
a2 = a2.concat([4,[5,6]]);
console.log(a2);        // [1,2,3,4,Array(2)[5,6]]