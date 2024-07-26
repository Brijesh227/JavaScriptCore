/* Closure:  function along with lexical enivornment forms a closure. 
        
    Note: line 66
    1. you can pass function as parameter to other function,
     eg.,
        funcion x(y){
            var a = 7;
            y();
        }
        x(function y(){
            console.log("hello y")
        })
    
    2. you can return function from other function,
     eg.,
        funcion x(){
            var a = 7;
            return function y(){
                console.log("hello from y",a)
            }
        }
        var z = x();
        z();                 // 7
*/

/*
Uses of Closures:
    1. Module Design Pattern
    2. Currying
    3. Functions like once
    4. memoize
    5. maintaining state in async world
    6. setTimeout
    7. Iterators
*/


function x(){
    var a = 7;
    function y() {
        console.log(a);    //7
    }
    y();
}
x();

/* source tab of browser:
    Closur (x):
        a: 7
    
    Global:
        x: function x(){...}
*/

function x(){
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();
z();                // 100

x()();              // 100


function x() { 
    function y() {
        console.log(a);
    }
    let a = 7;
    return y;
}
var z = x();
z();  /* or */  x()()            // 7

function z(){
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);          // 100 900
        }
        a = 100;
        return y;
    }
    var c = x();
    return c;
}
var j = z();
j();


// ------ Tricky Example -----

function x(){
    var i = 1;
    setTimeout(function y(){
        console.log(i);         // print hello 
                                //       1 (after 1 second).
    },1000);
    console.log("hello");
}
x();

// write function that print 1 after 1 sec 2 after 2 sec and so on....

function x(){
    for(var i=1;i<6;i++){
        setTimeout(() => {  
            console.log(i);
        }, i*1000);
    }
}
x();   // 6 6 6 6 6 it print this because of all setTimeout call back refer to same i and js doesn't wait for anything it push callback of setTimeout to stack and execute after for loop complete.

// first solution : use let instead of var
// second solution:
function x(){
    for(var i=1;i<6;i++){
        function z(time){
            setTimeout(() => {  
                console.log(i);
            }, time*1000);
        }
        z(i);
    }
}
x();

// my solution:
function print(i){
    setTimeout(()=> {
        console.log(i);
    },1000 * i);
}
function x(){
    for(var i=1;i<6;i++){
        print(i);
    }
}
x();


// Advantage: data hiding and encapsulation.
function counter(){
    var count=0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}
var cnt = counter();
cnt();                  // we are hiding count to not increment from outside world.

// Above code not a scalable approach use factory function instead

function Counter(){
    var count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}
var cnt1 = new Counter();
cnt1.incrementCounter();


// Disadvantage of closures:
    // 1. Memory over consumption