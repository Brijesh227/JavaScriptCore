//lexical scope?

const Person = {
    name: "john doe",
    getName: () => {
        console.log(`hello ${this.name}`);
    }
}

Person.getName();           // hello undefined
const per = new Person();   // TypeError: Person is not a constructor
per.getName();

const user = {
    name: "john doe",
    age: 25,
    pet: {
        type: 'dog',
        name: 'puppy',
    }
};

Object.freeze(user);

user.name = "hello";
user.pet.name = "hello";

console.log(user.name);         // john doe
console.log(user.pet.name);     // hello

/* which is used to create object from prototype : 
    Object.create() vs Object.prototype vs Object.defineProperty(
*/

const arr1 = ['a','b','c'];
const arr2 = ['b','c','a'];

console.log(
    arr1.sort() === arr1,           // true 
    arr2.sort() == arr2,            // true
    arr1.sort() === arr2.sort()     // false
);

console.log(typeof NaN); // "number"
console.log(NaN === NaN); // false (NaN is not equal to itself)
console.log(isNaN(NaN)); // true (isNaN checks if a value is NaN)


console.log("10"+5)     // 105
console.log("10"*5)     // 50
console.log(10*"5")     // 50
console.log(10+"5")     // 105
console.log("10"/5)     // 2
console.log("10"-5)     // 5
console.log(10/"5")     // 2
console.log(10-"5")     // 5

console.log("str"/3)    // NaN


const arr = [..."whatever"];
console.log(arr);               // [ 'w', 'h', 'a', 't', 'e', 'v', 'e', 'r' ]

const arr3 = [...["whatever"]];
console.log(arr);               // [ 'whatever' ]

async function f(){
    let res = "first!";
    let Promise = new Promise((resolve,reject) => {     // ReferenceError: Cannot access 'Promise' before initialization
        setTimeout(() => resolve('done!',1000));        // but I can use Promise as a variable name 
    })
    res = await Promise;
    console.log(res);           // done! (if P is smal in Promise)       
}

f(); 

var x = 5;
(function() {
    console.log(x);         // undefined
    var x = 10;
    console.log(x);         // 10
})();
