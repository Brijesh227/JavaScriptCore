/*
    function is hoisted.
    this: normal function and function expression 
            => in node (below object)
            => in browser (Window)
        : Arrow function (doesn't have its own context so it inherit from lexical scope)
            => in node ({})
            => in browser (Window)
*/

var x = 1;
a();                //10
b();                //100
console.log(x);     //1
function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}
// ------------

function hello(){
    console.log(this);                      // Global - Window object(browser)
                                            /*        - Node environment
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
                                            */
    console.log("arguments",arguments[0]);  // 1
}

// Function Expression
var arrGetNameFunExpression = function () {             
    console.log("this",this);                           // same as a above
    console.log("arguments",arguments[0]);              // same as a above
}

//Arrow Function
var arrGetName = () => {                                
    console.log("this",this);                           // Browser(window->inherit from binding environment) 
                                                        // nodejs({})                                           // arrow function doesn't have its own context so it inherit from lexical scope
    console.log("arguments",arguments[0]);              // browser(referenceError)  
                                                        // node({})                                             // arrow functions do not have their own arguments object. 
}
hello(1);
arrGetNameFunExpression(1);
arrGetName(1);