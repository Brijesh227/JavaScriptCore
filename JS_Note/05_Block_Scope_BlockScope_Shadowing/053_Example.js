/* ThumbRule: 
    1. this.a always try to find variable which has global scope.
    2. this always refer to the global scope in function.
    3. normal 'a' try to find in local scope, if not found then try to find in global scope.
    4. if var variable is bound to function then it will not harm outer global object.
    5. this.a never throw error.
    6. normal a=10 is never hoisted, and when this statement is executed in block or function, it will bind 10 to variable a (let,var).

    Note:
        see the examples on line 55,136,149
*/


// ----- Example of Var ----- 
function hello(){
    console.log(a,this.a);  // undefined undefined
    var a = 10;
    console.log(a,this.a);  // 10 undefined
}
hello();
console.log(this.a);        // undefined
console.log(a);             // ReferenceError: a is not defined


{
    console.log(a,this.a);  // undefined undefined
    var a = 10;
    console.log(a,this.a);  // 10 10
}
console.log(this.a);        // 10 
console.log(a);             // 10


var a = 20;
function hello(){
    console.log(a,this.a);  // undefined 20
    var a = 10;
    console.log(a,this.a);  // 10 20
}
hello();
console.log(this.a);        // 20
console.log(a);             // 20


var a = 20;
{
    console.log(a,this.a);  // 20 20
    var a = 10;
    console.log(a,this.a);  // 10 10
}
console.log(this.a);        // 10
console.log(a);             // 10


var a = 20;
function hello(){
    console.log(a,this.a);  // 20 20  
    a = 10;
    console.log(a,this.a);  // 10 10
}
console.log(this.a);        // 20
console.log(a);             // 20
hello();
console.log(this.a);        // 10
console.log(a);             // 10


var num = 10;
function hello(){               // same for block
    console.log(num,this.num);  // RefereneError 10
    let num = 20;
    console.log(num,this.num);  // 20 10
}
console.log(this.num,num);        // 10 10
hello();
console.log(this.num,num);        // 10 10

var num = 10;
{               
    console.log(num, this.num);  // RefereneError 10
    let num = 20;
    console.log(num,this.num);  // 20 10
}
console.log(this.num,num);      // 10 10



// ------- Let,const -------
function hello(){
    console.log(a,this.a);  // ReferenceError undefined
    let a = 10;
    console.log(a,this.a);  // 10 undefined
}
console.log(this.a);        // undefined
console.log(a);             // ReferenceError
hello();
console.log(this.a);        // undefined
console.log(a);             // ReferenceError

{
    console.log(a,this.a);  // ReferenceError: can't access before initiliaze undefined
    let a = 10;
    console.log(a,this.a);  // 10 undefined
}
console.log(this.a);        // undefined 
console.log(a);             // ReferenceError: a is not defined


let a = 20;
function hello(){
    console.log(a,this.a);  // ReferenceError undefined
    let a = 10;
    console.log(a,this.a);  // 10 undefined
}
console.log(this.a);        // undefined
console.log(a);             // 20
hello();
console.log(this.a);        // undefined
console.log(a);             // 20   

let a = 20;
{
    console.log(a,this.a);  // ReferenceError undefined
    let a = 10;
    console.log(a,this.a);  // 10 undefined
}
console.log(this.a);        // undefined
console.log(a);             // 20

let a = 20;
{
    var a = 10;             // sytaxError: redeclration is not allowed
}


let a = 20;
function hello() {
    console.log(a,this.a);  // 20 undefined
    a = 10;
    console.log(a,this.a);  // 10 undefined
}
console.log(this.a);        // undefined
console.log(a);             // 20
hello();
console.log(this.a);        // undefined
console.log(a);             // 10


function hello(){
    console.log(a,this.a);  // ReferenceError undefined
    a = 10;
    console.log(a,this.a);  // 10 10
}
console.log(this.a);        // undefined
console.log(a);             // ReferenceError
hello();
console.log(this.a);        // 10
console.log(a);             // 10



var a=10;
var b=20;
const obj = {
    a: -10,
    b: -20,
}
function add() {
    console.log(this.a,this.b);
    console.log(a,b);
    return this.a + b;
}
const add2 = () => {
    console.log(this.a,this.b);
    console.log(a,b);
    return this.a + b;
}
obj.add = add;
obj.add2 = add2;
console.log("add",add());
console.log("add2",add2());
console.log("obj add",obj.add());
console.log("obj2 add2",obj.add2());

// var a = 10;
// var b = 20;
// function add() {
//     console.log(this.a);
//     console.log(b);
//     return this.a + b;
// }
// const add2 = () => {
//     console.log(this.a);
//     console.log(b);
//     return this.a + b;
// }
// console.log("add",add())
// console.log("add2",add2())