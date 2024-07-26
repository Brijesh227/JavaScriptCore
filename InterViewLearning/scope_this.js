// console.log(hoist)
// hoist = "hello" //ReferenceError: hoist is not defined
// var hoist = "hello" //undefined
// let hoist="hello" //ReferenceError: Cannot access 'hoist' before initialization

// let num = 10;
// function hello() {
//     console.log("this",this.num);
//     console.log("inner num",num);
//     var num = 20;
//     console.log("this",this.num);
// }
// console.log("outer up this",this.num);
// console.log("outer up",num);
// hello();
// console.log("outer down this",this.num);
// console.log("outer down",num);

// let num = 10;
// {
//     console.log("this",this.num);
//     console.log("inner num",num);
//     let num = 20;
//     console.log("this",this.num,num);
// }
// console.log("outer up",this.num);
// console.log("outer down",num);

// var double = 22;
// function double(num) {
//   return (num*2);
// }
// console.log(typeof double); // Output: num
//ref: https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript

// let num = 10;
// function hello() {
//     console.log(num);
//     // let num = 20;
// }
// hello();

// function hello(){
//     console.log(this);
// }
// hello();

// function createBase(base){
//     return function(n) {
//         return base + n;
//     }
// }

// var add = createBase(6);
// add(10);

// var b= 10;
// {
//     let b= 100;
//     console.log("in",b);
// }
// console.log("out",b);
// console.log("out this",this.b);

// let b= 10;
// function show(){
//     let b= 100;
//     console.log("in",b);
// }
// show()
// console.log("out",b);
// console.log("out this",this.b);

// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//         console.log(this.b);
//     }
// }
// var b = 20;
// a();


// var a = 10;
// function b() {
//     console.log("upper",a);
//     a = 15;
//     console.log("lower",a);
//     return;
//     //function a() {}
// }
// b();
// console.log(a);

// function check() {
//     glob = 10;
//     // var glob = 20;
// }
// check();
// console.log(glob);

// {
//     glob = 20;
// }
// console.log(glob);