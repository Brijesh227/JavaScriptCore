/*  please must see example on line 89 onwards
    https://www.youtube.com/watch?v=fVXp7ZWjlO4&list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP&index=6

    You can use 'this' inside Object to refer current context.
    In function this refer to global

    1. Regular Functions vs. Arrow Functions
        Regular Functions: In regular functions (those declared with the function keyword), the value of this is determined by how the function is called:
            Global Context (non-strict mode): When a regular function is called in the global context (not as a method of an object), this refers to the global object (window in browsers).

            Method of an Object: When a function is called as a method of an object, this refers to the object the method was called on.

    2. Arrow Functions
            Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical scope at the time they are defined.
            inside Arrow === this in the surrounding code where the arrow function is defined.

    Summary:

        Regular Functions (function keyword):
            this depends on how the function is called.
            In the global context, this refers to the global object.
            When called as a method, this refers to the object the method belongs to.

        Arrow Functions:
            'this' is lexically bound and refers to this from the surrounding code at the time the arrow function is defined.

        // Object does not create binding with this, function do.
*/


console.log(this);                 // {}(Node)    Window(browser)
function hello() {
    let username = "hello";
    console.log(this);             /*                                       
                                       Node environment:
                                           <ref *1> Object [global] {
                                              global: [Circular *1],
                                              queueMicrotask: [Function: queueMicrotask],
                                              clearImmediate: [Function: clearImmediate],
                                              setImmediate: [Function: setImmediate] {
                                                [Symbol(nodejs.util.promisify.custom)]: [Getter]
                                              },
                                              structuredClone: [Getter/Setter],
                                              clearInterval: [Function: clearInterval],
                                              clearTimeout: [Function: clearTimeout],
                                              setInterval: [Function: setInterval],
                                              setTimeout: [Function: setTimeout] {
                                                [Symbol(nodejs.util.promisify.custom)]: [Getter]
                                              },
                                              atob: [Getter/Setter],
                                              btoa: [Getter/Setter],
                                              performance: [Getter/Setter],
                                              fetch: [AsyncFunction: fetch]
                                           }                              
                                       Browser environment:
                                           Window
                                   */
    console.log(username);         // hello
    console.log(this.username);    // undefined (this refer to global context)
}
hello();

const arrHello = () => {
    const username = "hello";
    console.log(this);              // {}(Node)    Window(browser)
    console.log(this.username);     // undefined 
}
arrHello();

const obj = {
    name: "ji",
    hello: function() {
        console.log(this);          // {name: "ji", hello: ƒ} 
    },
    arrHello: () => {
        console.log(this);          // Window
    },
    talk() {
        setTimeout(() => {
            console.log(this.name); // ji
        }, 1000);
    }
}
console.log(this);              // Window
console.log(obj.hello());       // {name: "ji", hello: ƒ} (when called obj.hello(), this refer to obj)
console.log(obj.arrHello());    // Window (Object doesn't create its own execution context)
console.log(obj.talk());        // ji (obj scope passed to arrow fucntion inside setTimout)

function helloji(){
    let hi2 = "hi";
    var hello2 = "hello";
    console.log(this);              // {obj}(Node)    Window(browser)
    console.log(this.hello2);       // undefined
    function ji(){  
        let me = "me";  
        console.log(me);            // me
        console.log(hi2);           // hi
        console.log(hello2);        // hello
        console.log(this);          // {obj}(Node)    Window(browser) without hello2
        console.log(this.hello2);   // undefined  Variables declared with var are function-scoped, so hello2 is not visible to ji as it's scoped to helloji.
        console.log(this.hi2);      // hi
    }
    ji();
}
helloji();

// ----- color code Example -----

function hello() {
    let username = "hello";
    let arr = () => {
        console.log(this);                  // window
        console.log(this.username);         // undefined
    }
    console.log(username);                  // hello
    console.log(this.username);             // undefined
    arr();
}
hello();

/**
 * Understanding this
    hello Function Execution Context:
        When hello is called, it creates its own execution context.
        Inside this context, username is defined, and this refers to the this value of hello. Since hello is called as a global function, this in non-strict mode refers to the global object (window in a browser, global in Node.js). 
        In strict mode, this would be undefined.

    Arrow Function arr:

        Arrow functions do not have their own this. Instead, they capture this from the lexical scope where they are defined. In this case, the lexical scope is the hello function's execution context.
        So arr is using the this from hello, which, as mentioned, is the global object in non-strict mode.
 */


function hello() {
    let username = "hello";
    let arr = function() {
        console.log(this);              // window
        console.log(this.username);  
    }
    arr();
}
hello();

/**
 * Here’s what happens with a regular function:

    arr() is called with this set to the hello function’s execution context. 
    Since hello is invoked globally, this will still refer to the global object, but if you were to call hello as a method of an object, 
    this inside arr would refer to that object.

 */

function hello() {
    let username = "hello";
    let arr = function() {
        console.log(this);              // window
        console.log(this.username);     // undefined 
    }.bind(this);
    arr();
}
hello();

// hello function still refers to the global context due to how the function is invoked.

// ------------------

function talk() {
    return this;
}

const me = {
    name: "ji",
    talk: talk      // shorthand only talk
}
me.talk();          // {name: "ji", talk: ƒ}
talk();             // Window (coz browser called like window.talk())

function Person(name) { 
    this.name = name;
    console.log(this);                  // Person { name: "ji", talk: f, talkWithThis : f, __proto__: Object }
    this.talk = function() {
        console.log("talking", this);   // Person { name: "ji", talk: f, talkWithThis : f, __proto__: Object }
    };
    this.talkWithThis = function() {
        console.log("talking this", this.name);     // talking this ji
    };
    setTimeout(function() {
        // here this refer to window
        console.log("normal", this);         // Window (callback function runs entirely in different execution context)
    },1000);
    setTimeout(() => {
        // arrow function is lexically bound and refers to 'this' from the surrounding code
        console.log("arrow this",this);     // Person {name: "ji", talk: f, talkWithThis : f, __proto__: Object } 
    },2000);
}
const pme = new Person("ji");
console.log(pme.talk());
console.log(pme.talkWithThis()); 

// ----- callback example -----
function outer(callback) {
    callback();
}
function inner() {
    console.log("inner", this);
}
outer(inner);       // Window (inner function runs entirely in different execution context)