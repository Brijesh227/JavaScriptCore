// Block, Block scope and shadowing

/*  Block -> used to wrap multiple statements in a block. like if want one statement but if we want to put multiple statement then we need to grouped those statement in block.
    Block Scope -> what variable and function we can access inside that block.
              -> let and const are block scoped.
*/

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a,b,c); // 10 20 30
}
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // not come here

/* source tab of browser:
    Block:
        b: undefined
        c: undefined

    Global:
        a: undefined, 
*/


// Shadowing -> same variable name with different scope

var a = 100;
{
    var a = 10;
    console.log(a); // 10
}

console.log(a); // 10       // because both a reference to global scope variable 'a'

let b = 100;
{
    let b = 10;
    console.log(b,this.b); // 10 undefined ->  10 -> let is blocked scope and refer to 'b' inside Block scope
                           //                undefined -> this refer to global scope but b inside Block scope     
}

console.log(b,this.b);     // 100  undefined ->  'b' is refer to script block

const c = 100;
{
    const c = 10;
    console.log(c,this.c); // 10 undefined ->  10 -> const is blocked scope and refer to 'c' inside Block scope
                           //                undefined -> this refer to global scope but c inside Block scope 
}

console.log(c,this.c);      // 100 undefined    'c' is refer to script block

/* source tab of browser:
    Block:
        b: 10
        c: 10

    Script:
        b: 100,
        c: 100
    
    Global:
        a: 100, after soemtime a = 10 
*/

// For function and block scope shadowing working is same


//----- Illegal Shadowing  ------

let a = 10;
{
    var a = 20;
    console.log(a);   // SytaxError: Identifier 'a' has already been declared
}


// ------ Valid Shadowing -------
// Unlike let and const, var declarations are function-scoped or globally-scoped if not in a function, not block-scoped.

let a = 10;
function x() {
    console.log(a,this.a); // undefined undefined
    var a = 20;
    console.log(a,this.a); // 20 undefined
}
console.log(a,this.a);    // 10 undefined
x();
console.log(a,this.a);   // 10 undefined

const d = 100;
{
    const d = 10;
    console.log(d);         // 10
    {
        const d = 1;
        console.log(d);     // 1
    } 
}
console.log(d);             // 100

