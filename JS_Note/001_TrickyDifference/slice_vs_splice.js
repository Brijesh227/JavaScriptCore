/**
 * see example on 34
 * 
 * slice: returns a shallow copy, does not modify original one. (start,end) (start) ()
 *          -> slice create shallowed copy and return that portion
 * 
 * splice: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
 *          -> change original one
 *          -> it add or remove from original array
 *          -> it behave based on arguments 
 *                  -> when you provide delete count it will return removed elements
 * 
 */


const arr = [1,2,3,4,5,6,7];

const slic = arr.slice(2,4);   
console.log('slic',slic);       // slic [ 3, 4 ]
console.log('arr',arr);         // arr [1, 2, 3, 4, 5, 6, 7]

const spli = arr.splice(2);    
console.log('spli',spli);       // spli [ 3, 4, 5, 6, 7 ]
console.log('arr',arr);         // arr [ 1, 2 ]

const spl = arr.splice(2,1);
console.log('spl',spl);         // spl [ 3 ]
console.log('arr',arr);         // arr [ 1, 2, 4, 5, 6, 7 ]

const sp = arr.splice(2,1,8);
console.log('sp',sp);           // sp [ 3 ]
console.log('arr',arr);         // arr [1, 2, 8, 4, 5, 6, 7]

const sli = arr.slice(2,4);   
console.log('sli',sli);         // slic [ 3, 4 ]
sli[1] = 9;
console.log('sli',sli);         // [3, 9]
console.log('arr',arr);         // [1, 2, 3, 4, 5, 6, 7]    // shallow copy but not changed because primitive value




const originalArray = [{ value: 1 }, { value: 2 }];
const shallowCopy = originalArray.slice();

shallowCopy[0].value = 10;      // Modify a property of the object in the copied array

console.log('shallowCopy:', shallowCopy); // Output: [{ value: 10 }, { value: 2 }]
console.log('originalArray:', originalArray); // Output: [{ value: 10 }, { value: 2 }]

const sp2 = arr.splice(2,1,8);
console.log('sp2',sp2);         // sp2 [ 3 ]
sp2[0] = 9;   
console.log('sp2',sp2);         // sp2 [ 9 ]                      
console.log('arr',arr);         // arr [1, 2, 8, 4, 5, 6, 7]
