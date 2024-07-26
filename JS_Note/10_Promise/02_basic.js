// await is only waiting for block of promise, do not wait in global scope.
function promiseFunction(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("promise ans")
        }, 3000); 
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