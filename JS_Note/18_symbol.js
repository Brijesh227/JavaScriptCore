const obj2 = {
    "hi":123,
    "hi":345
};

console.log(obj2);       // { hi: 345 }

// A Symbol is a unique and immutable primitive value. 
// When used as a key in an object, a Symbol provides a way to avoid key collisions because each Symbol is unique

const sym1 = Symbol('hi');
const sym2 = Symbol('hi');

const obj = {
    [sym1]: 123,
    [sym2]: 345
};

console.log(obj); // { [Symbol(hi)]: 123, [Symbol(hi)]: 345 }
console.log(obj[sym1]); // 123
console.log(obj[sym2]); // 345

