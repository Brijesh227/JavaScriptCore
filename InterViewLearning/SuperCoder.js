//lexical scope? => the accessibility of variables based on their physical location (or structure) in the source code at the time the code is written

const Person = {
    name: "john doe",
    getName: () => {
        console.log(`hello ${this.name}`);
    },
    getName2: () => {
        console.log(this.name);
    }
}

Person.getName();           // hello
Person.getName2();          // "" empty   ------(important)---------
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
    Object.create() vs Object.prototype vs Object.defineProperty()
*/

const arr1 = ['a','b','c'];
const arr2 = ['b','c','a'];

console.log(
    arr1.sort() === arr1,           // true 
    arr2.sort() == arr2,            // true
    arr1.sort() === arr2.sort()     // false
);

console.log(typeof NaN);    // "number"
console.log(NaN === NaN);   // false (NaN is not equal to anything, including itself.)
console.log(NaN == NaN);    // false
console.log(isNaN(NaN));    // true (isNaN checks if a value is NaN)
console.log(isNaN(true));   // false
console.log(isNaN(false));  // false (because false is coerced to 0)

console.log(isNaN('foo'));          // true  -> The global isNaN() function performs type coercion before checking if the value is NaN. This means it first tries to convert the argument to a number        
console.log(Number.isNaN('foo'));  // false  -> The Number.isNaN() method, on the other hand, does not perform type coercion


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
        setTimeout(() => resolve('done!'),1000);        // but I can use Promise as a variable name 
    })
    res = await Promise;
    console.log(res);           // done! (if P is small in Promise)       
}

f(); 

var x = 5;
(function() {
    console.log(x);         // undefined
    var x = 10;
    console.log(x);         // 10
})();

//which css propertly allows to to create responsive layout by defining flexible units based on viewport width?

width of div 
div {
    width: 310px;
    padding: 20px;
    border: 5px solid blue;
    margin: 0;
}

// 360px


console.log(parseInt('a123') == Number("123z"));        // NaN == NaN  -> false
console.log(typeof "10"/5)                              // NaN
console.log(typeof ("10"/5))                            // number
console.log(typeof NaN)                                 // number
console.log(typeof "10"/5 + typeof NaN);                // NaNnumber
console.log(isNaN(("10"/5)));                           // false
console.log(typeof (50 + +"100px") === "number");       // +"100px"(unary) = NaN => 50 + NaN = NaN => typeof(NaN) = number => number === number => true