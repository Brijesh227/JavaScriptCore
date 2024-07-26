//Scope is directly related "Lexical Environment".
//Lexical Environment is local memory along with lexical environment of its parent.

//Scope where you can access specific variable or function in code

function a(){
    console.log(b);             //10
    c();
    function c(){
        console.log(b);         //10
    }
}
var b = 10;
a();

function a(){
    var b = 10;         
    console.log(b);             //10
    c();
    function c(){
        console.log(b);         //10
    }
}
a();

function a(){
    var b = 10;         
    console.log(b);             //10
}
a();
console.log(b);                 // ReferenceError: b is not defined