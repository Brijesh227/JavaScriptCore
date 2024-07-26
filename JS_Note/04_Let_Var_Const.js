// Temporal Dead Zone: is the time since when this let varible was hoisted and till it is initiliaze it's value.

/* SyntaxtError vs ReferenceError vs TypeError
    ReferenceError: when you try to access variable inside temporal dead zone it gives this error.
    TypeError: Assignment to constant variable.
    SyntaxError: Identifier 'x' has already been declared. (not a single line of code is running)
*/

// Is let and const variable declaration hoisted? -> yes it's hoisted they keep in temporal dead zone.

/**
    In Global Scope:
        Script:

*/


// -------TEMPORAL DEADZONE AND REFERENCE ERROR----------

console.log(b);                 // undefined coz of hoisting
console.log(a);                 // ReferenceError: cannot access 'a' before initialization;
console.log(x);                 // ReferenceError: 'x' is not defined.  
let a = 10;
var b = 100;
console.log(window.b,this.b);          // 100 
console.log(window.a,this.a);          // undefined 

/* source tab of browser:
    Script:
        a: undefined,      Temporal Dead zone
            aftersome time when let a = 10 is executed
        a: 10              still inside Script but not in temporal dead zone.

    Global:
        b: undefined, 
*/


//-------------SYNTAX ERROR------------
console.log("hello start"); // nothing is printed, not a single line of code is exectuted.
let x = 100;
let x = 10;                 // SytaxError: Identifier 'x' has already been declared.

var e = 100;
let e = 10;                 // SytaxError: Identifier 'e' has already been declared.


//------------
var c = 10;
var c = 100;                // It's fine. both is valid
console.log(c,this.c);      // 100 100
c = 1;
console.log(c,this.c);      // 1 1

let f = 10;
f = 100;                    // It's fine. both is valid
console.log(f,this.f);      // 100 undefined


// -------TYPE ERROR-------

const d = 100;
d = 10;                     // TypeError: Assignment to constant variable.


// ------------

z = 1;
console.log(z,this.z);             // 1 1

// ------------ scope in function --------
let c = 10;
var e = 20;

/* source tab of browser:
    Script:
        c: undefined,      Temporal Dead zone
            aftersome time when let c = 10 is executed
        c: 10              still inside Script but not in temporal dead zone.

    Global:
        e: undefined, 
*/

function hi() {
  let a = 1;
  var b = 9;
}
  
/* source tab of browser:
    Local:
        a: 1,
        b: 9

    Global:
        window
*/