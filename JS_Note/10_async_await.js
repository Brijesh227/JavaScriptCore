async function hi(){
    console.log("1");
    var i = 1;
    await setTimeout(function y(){
        console.log(i);          
    },1000);
    console.log("2");
}
hi();

// 1
// 2
// 1 (after 1 sec)

// The await keyword is used with promises, and since setTimeout is not a promise, it won't behave as you might expect
// setTimeout does not return a promise. Instead, it takes a callback function and schedules it to be executed after a specified delay

//what if need to wait for a min:

async function hi() {
    console.log("1");
    var i = 1;

    await new Promise(resolve => {
        setTimeout(() => {
            console.log(i);
            resolve(); 
        }, 1000);
    });

    console.log("hello 2");
}

hi();

