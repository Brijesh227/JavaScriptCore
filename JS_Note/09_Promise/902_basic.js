/**
 * Always use resolve or reject from promise else await code never executes and keep waiting.
 * 
 */


// await is only waiting for block of promise, do not wait in global scope.
function promiseFunction(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("promise ans")
        }, 2000); 
    });
}

async function hello(){
    console.log("hello start");
    const res = await promiseFunction();
    console.log("hello res",res);
    console.log("hello end");
}
function hi(){
    console.log("hi start");
}

// 1. case
hello();
hi();

/*  hello start
    hi start

    ....after 3 sec

    hello res promise ans
    hello end
*/

// 2. case
async function ji(){
    await hello();
    hi();    
}
ji();

/*  hello start

    ....after 3 sec

    hello res promise ans
    hello end
    hi start
*/

// what if i not return from promise:

function promiseFunctionWithoutReturn(){
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("promise ans")
        }, 2000); 
    });
}

(async function(){
    const res = await promiseFunctionWithoutReturn();
    console.log(res);       // undefined
}())

// what if i not use return, resolve or reject from promise:

function promiseFunctionWithoutReturn(){
    new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("promise ans")
        }, 2000); 
    });
}

(async function(){
    const res = await promiseFunctionWithoutReturn();
    console.log(res);
}());

// undefined      wait for 2 sec
// promise ans

function promiseFunctionWithoutReturn(){
    new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("promise ans")
        }, 2000); 
    });
}

(async function(){
    const res = await promiseFunctionWithoutReturn();
    console.log(res);
}());

//undefined   wait for 2 sec...
// new UnhandledPromiseRejection(reason);

// UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "promise ans".
//     at throwUnhandledRejectionsMode (node:internal/process/promises:392:7)
//     at processPromiseRejections (node:internal/process/promises:475:17)
//     at process.processTicksAndRejections (node:internal/process/task_queues:106:32) {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

// what if i not use resolve or reject from promise: (dangerous)

function promiseFunctionWithoutReturn(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("promise ans")
        }, 2000); 
    });
}

(async function(){
    const res = await promiseFunctionWithoutReturn();
    console.log(res);                                   // code never goes here
}());

// wait for 2 sec... promise ans  

/**
 * Key Points:
    If a Promise does not resolve or reject, it stays in the "pending" state forever.
    The await will also wait forever for the Promise to settle.
 * 
 */