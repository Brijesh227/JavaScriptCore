let myArray = [];
let myArray2 = new Array();

const arr5 = new Array(5);  // Create an empty array of length 5
                            // not like undefined * 5 but [empty * 5]

arr5.push(11); 
console.log(arr5.length);   // 6
console.log(arr5);          // [empty × 5, 11]
console.log(arr5[0])        // undefined                  (-------------- intersting ------------)


const arr2 = new Array(1);
arr2.push(1);
arr2.push(2);

// [empty, 1, 2]

const arr = new Array(5);   // Create an empty array of length 5
arr.fill(0);                // [0,0,0,0,0]
arr.fill(1, 1, 4);          // [0,1,1,1,0]    


const arrf = new Array(3).fill({}); // All elements reference the same object
arrf[0].key = 'value';
console.log(arrf);                  // [{"key": "value"},{"key": "value"},{"key": "value"}]

arrf[1].key = 'val2';
console.log(arrf);                  // [{"key": "val2"},{"key": "val2"},{"key": "val2"}]